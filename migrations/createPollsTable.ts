import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import PollSqlRecord from '@/types/PollSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<PollSqlRecord>>(
  'polls', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    options: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      unique: true
    },
    cached_tallies: {
      type: DataTypes.ARRAY(DataTypes.BIGINT),
      unique: true
    },
    multiple: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    hide_totals: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    votes_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lock_version: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_fetched_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    voters_count: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('polls')