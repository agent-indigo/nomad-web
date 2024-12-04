import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import OAuthApplicationSqlRecord from '@/interfaces/OAuthApplicationSqlRecord'
import createId from '@/utilities/createId'
const oauthApplicationSqlModel: ModelStatic<Model<OAuthApplicationSqlRecord>> = sequelize.models.OAuthApplication ?? sequelize.define<Model<OAuthApplicationSqlRecord>>(
  'OAuthApplication', {
    ...createId(),
    owner_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    uid: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    owner_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    secret: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    redirect_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    scopes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    superapp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    confidential: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    website: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    }
  }, {
    tableName: 'oauth_applications',
    timestamps: true
  }
)
oauthApplicationSqlModel.hasOne(
  sequelize.models.User, {
    foreignKey: 'owner_id'
  }
)
export default oauthApplicationSqlModel