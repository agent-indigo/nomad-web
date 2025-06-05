import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import PollVoteSqlRecord from '@/types/PollVoteSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<PollVoteSqlRecord>>(
  'poll_votes', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    poll_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Poll',
        key: 'id'
      }
    },
    choice: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('poll_votes')