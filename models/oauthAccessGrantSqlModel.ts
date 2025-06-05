import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import OAuthAccessGrantSqlRecord from '@/types/OAuthAccessGrantSqlRecord'
import createId from '@/utilities/createId'
const oauthAccessGrantSqlModel: ModelStatic<Model<OAuthAccessGrantSqlRecord>> = sequelize.models.OAuthAccessGrant ?? sequelize.define<Model<OAuthAccessGrantSqlRecord>>(
  'OAuthAccessGrant', {
    ...createId(),
    application_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'OAuthApplication',
        key: 'id'
      }
    },
    resource_owner_id: {
      type: DataTypes.UUID,
      allowNull: false,
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
    expires_in: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    redirect_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
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
    tableName: 'oauth_access_grants',
    timestamps: true
  }
)
export default oauthAccessGrantSqlModel