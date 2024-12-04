import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import SettingSqlRecord from '@/interfaces/SettingSqlRecord'
import createId from '@/utilities/createId'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<SettingSqlRecord>>(
  'settings', {
    ...createId(),
    var: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    thing_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    thing_id: {
      type: DataTypes.UUID,
      allowNull: true,
      unique: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('settings')