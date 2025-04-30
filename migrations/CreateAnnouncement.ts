import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AnnouncementSqlRecord from '@/types/AnnouncementSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AnnouncementSqlRecord>>(
  'announcements', {
    ...createId(),
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    published: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    all_day: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    scheduled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    starts_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ends_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('announcements')