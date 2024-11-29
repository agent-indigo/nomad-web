import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import PrefsSqlRecord from '@/interfaces/PrefsSqlRecord'
import createId from '@/utilities/createId'
const prefsSqlModel: ModelStatic<Model<PrefsSqlRecord>> = sequelize.models.Prefs ?? sequelize.define<Model<PrefsSqlRecord>>(
  'Prefs', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    theme: {
      type: DataTypes.ENUM(
        'dark',
        'light',
        'system'
      ),
      allowNull: false,
      defaultValue: 'system'
    }
  }, {
    tableName: 'prefs',
    timestamps: true
  }
)
prefsSqlModel.belongsTo(
  sequelize.models.User, {
    foreignKey: 'user'
  }
)
export default prefsSqlModel