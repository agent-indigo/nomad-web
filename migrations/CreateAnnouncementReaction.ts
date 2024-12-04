import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AnnouncementReactionSqlRecord from '@/interfaces/AnnouncementReactionSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AnnouncementReactionSqlRecord>>(
  'announcement_reactions', {
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
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('announcement_reactions')