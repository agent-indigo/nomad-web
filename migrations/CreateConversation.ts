import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import ConversationSqlRecord from '@/interfaces/ConversationSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<ConversationSqlRecord>>(
  'conversations', {
    ...createId(),
    uri: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('conversations')