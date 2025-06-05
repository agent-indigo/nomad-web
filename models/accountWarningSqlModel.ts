import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountWarningSqlRecord from '@/types/AccountWarningSqlRecord'
import createId from '@/utilities/createId'
const accountWarningSqlModel: ModelStatic<Model<AccountWarningSqlRecord>> = sequelize.models.AccountWarning ?? sequelize.define<Model<AccountWarningSqlRecord>>(
  'AccountWarning', {
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
    },
    action: {
      type: DataTypes.BIGINT,
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
export default accountWarningSqlModel