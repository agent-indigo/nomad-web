import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import MediaAttachmentSqlRecord from '@/interfaces/MediaAttachmentSqlRecord'
import createId from '@/utilities/createId'
const mediaAttachmentSqlRecord: ModelStatic<Model<MediaAttachmentSqlRecord>> = sequelize.models.MediaAttachment ?? sequelize.define<Model<MediaAttachmentSqlRecord>>(
  'MediaAttachment', {
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
    }
  }, {
    tableName: 'media_attachments',
    timestamps: true
  }
)
mediaAttachmentSqlRecord.hasOne(
  sequelize.models.Status, {
    foreignKey: 'status_id'
  }
)
mediaAttachmentSqlRecord.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
mediaAttachmentSqlRecord.hasOne(
  sequelize.models.ScheduledStatus, {
    foreignKey: 'scheduled_status_id'
  }
)
export default mediaAttachmentSqlRecord