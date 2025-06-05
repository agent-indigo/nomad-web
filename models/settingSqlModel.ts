import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import SettingSqlRecord from '@/types/SettingSqlRecord'
import createId from '@/utilities/createId'
const settingSqlModel: ModelStatic<Model<SettingSqlRecord>> = sequelize.models.Setting ?? sequelize.define<Model<SettingSqlRecord>>(
  'Settings', {
    ...createId(),
    var: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    thing_type: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    thing_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'settings',
    timestamps: true
  }
)
export default settingSqlModel