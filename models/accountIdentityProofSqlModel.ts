import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountIdentityProofSqlRecord from '@/interfaces/AccountIdentityProofSqlRecord'
import createId from '@/utilities/createId'
const accountIdentityProofSqlModel: ModelStatic<Model<AccountIdentityProofSqlRecord>> = sequelize.models.AccountIdentityProof ?? sequelize.define<Model<AccountIdentityProofSqlRecord>>(
  'AccountIdentityProof', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    provider: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    provider_username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    live: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'account_identity_proofs',
    timestamps: true
  }
)
accountIdentityProofSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
export default accountIdentityProofSqlModel