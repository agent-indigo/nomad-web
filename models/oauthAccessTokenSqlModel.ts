import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import OAuthAccessTokenSqlRecord from '@/interfaces/OAuthAccessTokenSqlRecord'
import createId from '@/utilities/createId'
const oauthAccessTokenSqlModel: ModelStatic<Model<OAuthAccessTokenSqlRecord>> = sequelize.models.OAuthAccessToken ?? sequelize.define<Model<OAuthAccessTokenSqlRecord>>(
  'OAuthAccessToken', {
    ...createId(),
    application_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'OAuthApplication',
        key: 'id'
      }
    },
    resource_owner_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    expires_in: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 0
    },
    revoked_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scopes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'oauth_access_tokens',
    timestamps: true
  }
)
oauthAccessTokenSqlModel.hasOne(
  sequelize.models.OAuthApplication, {
    foreignKey: 'application_id'
  }
)
oauthAccessTokenSqlModel.hasOne(
  sequelize.models.User, {
    foreignKey: 'resource_owner_id'
  }
)
export default oauthAccessTokenSqlModel