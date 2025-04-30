import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AnnouncementMuteSqlRecord from '@/types/AnnouncementMuteSqlRecord'
import createId from '@/utilities/createId'
const announcementMuteSqlModel: ModelStatic<Model<AnnouncementMuteSqlRecord>> = sequelize.models.AccouncementMute ?? sequelize.define<Model<AnnouncementMuteSqlRecord>>(
  'AnnouncementMute', {
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
    }
  }, {
    tableName: 'announcement_mutes',
    timestamps: true
  }
)
export default announcementMuteSqlModel