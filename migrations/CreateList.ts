import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import ListSqlRecord from '@/interfaces/ListSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<ListSqlRecord>>(
  'lists', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'List',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('lists')