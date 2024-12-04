import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AccountWarningSqlRecord from '@/interfaces/AccountWarningSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AccountWarningSqlRecord>>(
  'account_warnings', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    action: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_warnings')