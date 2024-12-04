import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import StatusSqlRecord from '@/interfaces/StatusSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<StatusSqlRecord>>(
  'statuses', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    in_reply_to_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    reblog_of_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    in_reply_to_account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    visibility: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sensitive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    spoiler_text: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    reply: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conversation_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Conversation',
        key: 'id'
      }
    },
    local: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    application_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'OAuthApplication',
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
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('statuses')