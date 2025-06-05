import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import MarkerSqlRecord from '@/types/MarkerSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<MarkerSqlRecord>>(
  'markers', {
    ...createId(),
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    timeline: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    last_read_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lock_version: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('markers')