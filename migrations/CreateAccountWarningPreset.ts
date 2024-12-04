import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AccountWarningPresetSqlRecord from '@/interfaces/AccountWarningPresetSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AccountWarningPresetSqlRecord>>(
  'account_warning_presets', {
    ...createId(),
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_warning_presets')