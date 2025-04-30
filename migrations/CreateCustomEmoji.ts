import {
  DataTypes,
  QueryInterface
} from 'sequelize'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable(
  'custom_emojis', {
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
      type: DataTypes.UUID,
      allowNull: true
    },
    image_uploaded_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('custom_emojis')