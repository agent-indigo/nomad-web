import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ScheduledStatusSqlRecord from '@/types/ScheduledStatusSqlRecord'
import createId from '@/utilities/createId'
const scheduledStatusSqlModel: ModelStatic<Model<ScheduledStatusSqlRecord>> = sequelize.models.ScheduledStatus ?? sequelize.define<Model<ScheduledStatusSqlRecord>>(
  'ScheduledStatus', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    scheduled_at: {
      type: DataTypes.DATE,
      allowNull: true,
      index: true
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'scheduled_statuses',
    timestamps: true
  }
)
export default scheduledStatusSqlModel