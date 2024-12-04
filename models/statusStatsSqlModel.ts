import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import StatusStatsSqlRecord from '@/interfaces/StatusStatsSqlRecord'
import createId from '@/utilities/createId'
const statusStatsSqlModel: ModelStatic<Model<StatusStatsSqlRecord>> = sequelize.models.StatusStats ?? sequelize.define<Model<StatusStatsSqlRecord>>(
  'StatusStats', {
    ...createId(),
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    replies_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    reblogs_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    favourites_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'status_stats',
    timestamps: true
  }
)
statusStatsSqlModel.hasOne(
  sequelize.models.Status, {
    foreignKey: 'status_id'
  }
)
export default statusStatsSqlModel