import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountDomainBlockSqlRecord from '@/types/AccountDomainBlockSqlRecord'
import createId from '@/utilities/createId'
const accountDomainBlockSqlModel: ModelStatic<Model<AccountDomainBlockSqlRecord>> = sequelize.models.AccountDomainBlock ?? sequelize.define<Model<AccountDomainBlockSqlRecord>>(
  'AccountDomainBlock', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    domain: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'account_domain_blocks',
    timestamps: true
  }
)
export default accountDomainBlockSqlModel