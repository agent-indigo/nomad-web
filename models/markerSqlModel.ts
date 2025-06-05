import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import MarkerSqlRecord from '@/types/MarkerSqlRecord'
import createId from '@/utilities/createId'
const markerSqlModel: ModelStatic<Model<MarkerSqlRecord>> = sequelize.models.Marker ?? sequelize.define<Model<MarkerSqlRecord>>(
  'Marker', {
    ...createId(),
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    timeline: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    last_read_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lock_version: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'markers',
    timestamps: true
  }
)
export default markerSqlModel