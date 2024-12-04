import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import OAuthAccessGrantSqlRecord from '@/interfaces/OAuthAccessGrantSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<OAuthAccessGrantSqlRecord>>(
  'oauth_access_grants', {
    ...createId(),
    application_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'OAuthApplication',
        key: 'id'
      }
    },
    resource_owner_id: {
      type: DataTypes.TEXT,
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
      type: DataTypes.NUMBER,
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
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('oauth_access_grants')