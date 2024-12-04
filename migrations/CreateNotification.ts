import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import NotificationSqlRecord from '@/interfaces/NotificationSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<NotificationSqlRecord>>(
  'notifications', {
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
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('notifications')