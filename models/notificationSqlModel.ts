import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import NotificationSqlRecord from '@/types/NotificationSqlRecord'
import createId from '@/utilities/createId'
const notificationSqlModel: ModelStatic<Model<NotificationSqlRecord>> = sequelize.models.Notification ?? sequelize.define<Model<NotificationSqlRecord>>(
  'Notification', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    from_account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    activity_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    activity_type: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'notifications',
    timestamps: true
  }
)
export default notificationSqlModel