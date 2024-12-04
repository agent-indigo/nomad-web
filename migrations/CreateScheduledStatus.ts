import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import ScheduledStatusSqlRecord from '@/interfaces/ScheduledStatusSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<ScheduledStatusSqlRecord>>(
  'scheduled_statuses', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    scheduled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('scheduled_statuses')