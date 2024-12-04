import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import MuteSqlRecord from '@/interfaces/MuteSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<MuteSqlRecord>>(
  'mutes', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    hide_notifications: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('mutes')