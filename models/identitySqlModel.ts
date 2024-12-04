import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import IdentitySqlRecord from '@/interfaces/IdentitySqlRecord'
import createId from '@/utilities/createId'
const identitySqlModel: ModelStatic<Model<IdentitySqlRecord>> = sequelize.models.Identity ?? sequelize.define<Model<IdentitySqlRecord>>(
  'Identity', {
    ...createId(),
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    provider: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uid: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'identities',
    timestamps: true
  }
)
identitySqlModel.hasOne(
  sequelize.models.User, {
    foreignKey: 'user_id'
  }
)
export default identitySqlModel