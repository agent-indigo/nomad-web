import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ScheduledStatusSqlRecord from '@/interfaces/ScheduledStatusSqlRecord'
import createId from '@/utilities/createId'
const scheduledStatusSqlModel: ModelStatic<Model<ScheduledStatusSqlRecord>> = sequelize.models.ScheduledStatus ?? sequelize.define<Model<ScheduledStatusSqlRecord>>(
  'ScheduledStatus', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    scheduled_at: {
      type: DataTypes.DATE,
      allowNull: true
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
scheduledStatusSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
export default scheduledStatusSqlModel