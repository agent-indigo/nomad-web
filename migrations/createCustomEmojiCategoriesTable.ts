import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import CustomEmojiCategorySqlRecord from '@/types/CustomEmojiCatagorySqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<CustomEmojiCategorySqlRecord>>(
  'custom_emoji_categories', {
    ...createId(),
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('custom_emoji_categories')