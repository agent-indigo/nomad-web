import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ConversationMuteSqlRecord from '@/types/ConversationMuteSqlRecord'
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
export default conversationMuteSqlModel