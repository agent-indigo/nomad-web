import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AccountStatsSqlRecord from '@/types/AccountStatsSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AccountStatsSqlRecord>>(
  'account_stats', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    statuses_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    following_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    followers_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lock_version: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    last_status_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_stats')