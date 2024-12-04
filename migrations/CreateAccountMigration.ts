import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AccountMigrationSqlRecord from '@/interfaces/AccountMigrationSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AccountMigrationSqlRecord>>(
  'account_migrations', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    acct: {
      type: DataTypes.TEXT
    },
    followers_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_migrations')