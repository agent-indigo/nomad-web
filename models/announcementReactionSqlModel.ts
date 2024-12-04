import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AnnouncementReactionSqlRecord from '@/interfaces/AnnouncementReactionSqlRecord'
import createId from '@/utilities/createId'
const announcementReactionSqlModel: ModelStatic<Model<AnnouncementReactionSqlRecord>> = sequelize.models.AnnouncementReaction ?? sequelize.define<Model<AnnouncementReactionSqlRecord>>(
  'AnnouncementReaction', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    announcement_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Announcement',
        key: 'id'
      }
    },
    custom_emoji_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'CustomEmoji',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'announcement_reactions',
    timestamps: true
  }
)
announcementReactionSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
announcementReactionSqlModel.hasOne(
  sequelize.models.Announcement, {
    foreignKey: 'announcement_id'
  }
)
announcementReactionSqlModel.hasOne(
  sequelize.models.CustomEmoji, {
    foreignKey: 'custom_emoji_id'
  }
)
export default announcementReactionSqlModel