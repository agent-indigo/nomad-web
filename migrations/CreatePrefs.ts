import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import PrefsSqlRecord from '@/interfaces/PrefsSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<PrefsSqlRecord>>(
  'prefs', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    theme: {
      type: DataTypes.ENUM(
        'dark',
        'light',
        'system'
      ),
      allowNull: false,
      defaultValue: 'system'
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('prefs')