import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountAliasSqlRecord from '@/types/AccountAliasSqlRecord'
import createId from '@/utilities/createId'
const accountAliasSqlModel: ModelStatic<Model<AccountAliasSqlRecord>> = sequelize.models.AccountAlias ?? sequelize.define<Model<AccountAliasSqlRecord>>(
  'AccountAlias', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    acct: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'account_aliases',
    timestamps: true
  }
)
export default accountAliasSqlModel