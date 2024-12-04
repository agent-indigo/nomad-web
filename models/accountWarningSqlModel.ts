import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountWarningSqlRecord from '@/interfaces/AccountWarningSqlRecord'
import createId from '@/utilities/createId'
const accountWarningSqlModel: ModelStatic<Model<AccountWarningSqlRecord>> = sequelize.models.AccountWarning ?? sequelize.define<Model<AccountWarningSqlRecord>>(
  'AccountWarning', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    action: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'account_warnings',
    timestamps: true
  }
)
accountWarningSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
accountWarningSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'target_account_id'
  }
)
export default accountWarningSqlModel