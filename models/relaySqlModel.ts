import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import RelaySqlRecord from '@/types/RelaySqlRecord'
import createId from '@/utilities/createId'
const relaySqlModel: ModelStatic<Model<RelaySqlRecord>> = sequelize.models.Relay ?? sequelize.define<Model<RelaySqlRecord>>(
  'Relay', {
    ...createId(),
    inbox_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    state: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    follow_activity_id: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    tableName: 'relays',
    timestamps: true
  }
)
export default relaySqlModel