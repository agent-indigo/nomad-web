import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ConversationMuteSqlRecord from '@/interfaces/ConversationMuteSqlRecord'
import createId from '@/utilities/createId'
const conversationMuteSqlModel: ModelStatic<Model<ConversationMuteSqlRecord>> = sequelize.models.ConversationMute ?? sequelize.define<Model<ConversationMuteSqlRecord>>(
  'ConversationMute', {
    ...createId(),
    conversation_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Conversation',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    }
  }, {
    tableName: 'conversation_mutes',
    timestamps: true
  }
)
conversationMuteSqlModel.hasOne(
  sequelize.models.Conversation, {
    foreignKey: 'conversation_id'
  }
)
conversationMuteSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
export default conversationMuteSqlModel