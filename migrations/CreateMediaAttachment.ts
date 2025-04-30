import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import MediaAttachmentSqlRecord from '@/types/MediaAttachmentSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<MediaAttachmentSqlRecord>>(
  'media_attachments', {
    ...createId(),
    status_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    scheduled_status_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'ScheduledStatus',
        key: 'id'
      }
    },
    shortcode: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    remote_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    file_file_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_file_size: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    file_meta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    blurhash: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('media_attachments')