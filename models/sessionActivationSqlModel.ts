import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import SessionActivationSqlRecord from '@/interfaces/SessionActivationSqlRecord'
import createId from '@/utilities/createId'
const sessionActivateSqlModel: ModelStatic<Model<SessionActivationSqlRecord>> = sequelize.models.SessionActivation ?? sequelize.define<Model<SessionActivationSqlRecord>>(
  'SessionActivation', {
    ...createId(),
    user_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    access_token_id: {
      type: DataTypes.TEXT,
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
    }
  }, {
    tableName: 'session_activations',
    timestamps: true
  }
)
sessionActivateSqlModel.hasOne(
  sequelize.models.User, {
    foreignKey: 'user_id'
  }
)
sessionActivateSqlModel.hasOne(
  sequelize.models.OAuthAccessToken, {
    foreignKey: 'access_token_id'
  }
)
export default sessionActivateSqlModel