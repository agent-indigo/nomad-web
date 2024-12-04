import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import OAuthApplicationSqlRecord from '@/interfaces/OAuthApplicationSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<OAuthApplicationSqlRecord>>(
  'oauth_applications', {
    ...createId(),
    owner_id: {
      type: DataTypes.UUID,
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
      allowNull: true,
      index: true
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
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('oauth_applications')