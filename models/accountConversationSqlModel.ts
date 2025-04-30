import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountConversationSqlRecord from '@/types/AccountConversationSqlRecord'
import createId from '@/utilities/createId'
const accountConversationSqlModel: ModelStatic<Model<AccountConversationSqlRecord>> = sequelize.models.AccountConversation ?? sequelize.define<Model<AccountConversationSqlRecord>>(
  'AccountConversation', {
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
      type: DataTypes.ARRAY(DataTypes.UUID),
      unique: true
    },
    status_ids: {
      type: DataTypes.ARRAY(DataTypes.UUID)
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
      allowNull: true
    }
  }, {
    tableName: 'account_conversations',
    timestamps: true
  }
)
export default accountConversationSqlModel