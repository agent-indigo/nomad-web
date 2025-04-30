import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import CustomEmojiCategorySqlRecord from '@/types/CustomEmojiCatagorySqlRecord'
import createId from '@/utilities/createId'
const customEmojiSqlModel: ModelStatic<Model<CustomEmojiCategorySqlRecord>> = sequelize.models.CustomEmojiCategory ?? sequelize.define<Model<CustomEmojiCategorySqlRecord>>(
  'CustomEmojiCategory', {
    ...createId(),
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    }
  }, {
    tableName: 'custom_emoji_categories',
    timestamps: true
  }
)
export default customEmojiSqlModel