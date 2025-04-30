import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ConversationSqlRecord from '@/types/ConversationSqlRecord'
import createId from '@/utilities/createId'
const conversationSqlModel: ModelStatic<Model<ConversationSqlRecord>> = sequelize.models.Conversation ?? sequelize.define<Model<ConversationSqlRecord>>(
  'Conversation', {
    ...createId(),
    uri: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'conversations',
    timestamps: true
  }
)
export default conversationSqlModel