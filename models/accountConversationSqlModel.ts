import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountConversationSqlRecord from '@/interfaces/AccountConversationSqlRecord'
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
      type: [DataTypes.UUID],
      unique: true
    },
    status_ids: {
      type: [DataTypes.UUID]
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
accountConversationSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
accountConversationSqlModel.hasOne(
  sequelize.models.Conversation, {
    foreignKey: 'conversation_id'
  }
)
export default accountConversationSqlModel