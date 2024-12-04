import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import SessionActivationSqlRecord from '@/interfaces/SessionActivationSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<SessionActivationSqlRecord>>(
  'session_activations', {
    ...createId(),
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    access_token_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'OAuthAccessToken',
        key: 'id'
      }
    },
    session_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    user_agent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ip: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isIp: true
      }
    },
    web_push_subscription_id: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('session_activations')