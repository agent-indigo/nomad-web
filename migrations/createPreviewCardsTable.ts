import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import PreviewCardSqlRecord from '@/types/PreviewCardSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<PreviewCardSqlRecord>>(
  'preview_cards', {
    ...createId(),
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
      validate: {
        isUrl: true
      }
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    provider_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    provider_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    width: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    embed_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
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
      type: DataTypes.FLOAT,
      allowNull: true
    },
    image_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('preview_cards')