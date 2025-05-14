import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import WebPushSubscriptionSqlRecord from '@/types/WebPushSubscriptionSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<WebPushSubscriptionSqlRecord>>(
  'web_push_subscriptions', {
    ...createId(),
    access_token_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'OAuthAccessToken',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    endpoint: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    key_p256dh: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    key_auth: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('web_push_subscriptions')