import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import CustomEmojiSqlRecord from '@/interfaces/CustomEmojiSqlRecord'
import createId from '@/utilities/createId'
const customEmojiSqlModel: ModelStatic<Model<CustomEmojiSqlRecord>> = sequelize.models.CustomEmoji ?? sequelize.define<Model<CustomEmojiSqlRecord>>(
  'CustomEmoji', {
    ...createId(),
    shortcode: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    domain: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    visible_in_picker: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    image_file_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image_file_size: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image_remote_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    category_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'CustomEmojiCategory',
        key: 'id'
      }
    },
    image_uploaded_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'custom_emojis',
    timestamps: true
  }
)
customEmojiSqlModel.hasOne(
  sequelize.models.CustomEmojiCategory, {
    foreignKey: 'category_id'
  }
)
export default customEmojiSqlModel