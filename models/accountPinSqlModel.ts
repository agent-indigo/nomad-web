import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountPinSqlRecord from '@/types/AccountPinSqlRecord'
import createId from '@/utilities/createId'
const accountPinSqlModel: ModelStatic<Model<AccountPinSqlRecord>> = sequelize.models.AccountPin ?? sequelize.define<Model<AccountPinSqlRecord>>(
  'AccountPin', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    }
  }, {
    tableName: 'account_pins',
    timestamps: true
  }
)
export default accountPinSqlModel