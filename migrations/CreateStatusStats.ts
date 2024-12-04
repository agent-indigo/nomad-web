import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import StatusStatsSqlRecord from '@/interfaces/StatusStatsSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<StatusStatsSqlRecord>>(
  'status_stats', {
    ...createId(),
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    replies_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    reblogs_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    favourites_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('status_stats')