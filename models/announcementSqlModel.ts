import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AnnouncementSqlRecord from '@/interfaces/AnnouncementSqlRecord'
import createId from '@/utilities/createId'
const announcementSqlModel: ModelStatic<Model<AnnouncementSqlRecord>> = sequelize.models.Announcement ?? sequelize.define<Model<AnnouncementSqlRecord>>(
  'Announcement', {
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
    }
  }, {
    tableName: 'announcements',
    timestamps: true
  }
)
export default announcementSqlModel