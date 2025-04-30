import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import WebPushSubscriptionSqlRecord from '@/types/WebPushSubscriptionSqlRecord'
import createId from '@/utilities/createId'
const webPushSubscriptionSqlModel: ModelStatic<Model<WebPushSubscriptionSqlRecord>> = sequelize.models.WebPushSubscription ?? sequelize.define<Model<WebPushSubscriptionSqlRecord>>(
  'WebPushSubscription', {
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
    }
  }, {
    tableName: 'web_push_subscriptions',
    timestamps: true
  }
)
export default webPushSubscriptionSqlModel