import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AnnouncementMuteSqlRecord from '@/interfaces/AnnouncementMuteSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AnnouncementMuteSqlRecord>>(
  'announcement_mutes', {
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
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('announcement_mutes')