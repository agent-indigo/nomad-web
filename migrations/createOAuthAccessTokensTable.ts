import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import OAuthAccessTokenSqlRecord from '@/types/OAuthAccessTokenSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<OAuthAccessTokenSqlRecord>>(
  'oauth_access_tokens', {
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
      type: DataTypes.BIGINT,
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
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('oauth_access_tokens')