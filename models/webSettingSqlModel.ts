import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import WebSettingSqlRecord from '@/interfaces/WebSettingSqlRecord'
import createId from '@/utilities/createId'
const webSettingSqlModel: ModelStatic<Model<WebSettingSqlRecord>> = sequelize.models.WebSetting ?? sequelize.define<Model<WebSettingSqlRecord>>(
  'WebSetting', {
    ...createId(),
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'web_Settings',
    timestamps: true
  }
)
webSettingSqlModel.hasOne(
  sequelize.models.User, {
    foreignKey: 'user_id'
  }
)
export default webSettingSqlModel