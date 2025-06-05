import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
import AccountConversationSqlRecord from '@/types/AccountConversationSqlRecord'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AccountConversationSqlRecord>>(
  'account_conversations', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    conversation_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Conversation',
        key: 'id'
      }
    },
    participant_account_ids: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    status_ids: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      unique: true
    },
    lock_version: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    unread: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    last_status_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_conversations')