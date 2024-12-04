import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import ConversationMuteSqlRecord from '@/interfaces/ConversationMuteSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<ConversationMuteSqlRecord>>(
  'conversation_blocks', {
    ...createId(),
    conversation_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Conversation',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('conversation_mutes')