import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
import AccountConversationSqlRecord from '@/interfaces/AccountConversationSqlRecord'
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
      type: [DataTypes.UUID],
      unique: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_ids: {
      type: [DataTypes.UUID],
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    lock_version: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    unread: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    last_status_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_conversations')