import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import SecurityEventSqlRecord from '@/interfaces/SecurityEventSqlRecord'
import createId from '@/utilities/createId'
const securityEventSqlModel: ModelStatic<Model<SecurityEventSqlRecord>> = sequelize.models.SecurityEvent ?? sequelize.define<Model<SecurityEventSqlRecord>>(
  'SecurityEvent', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    actor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    event: {
      type: DataTypes.ENUM(
        'email changed',
        'granted',
        'linked',
        'mfa disabled',
        'mfa enabled',
        'name changed',
        'password changed',
        'reinstated',
        'revoked',
        'suspended',
        'unlinked'
      ),
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM(
        'admin',
        'dev',
        'mode'
      ),
      allowNull: true
    }
  }, {
    tableName: 'securityEvents',
    timestamps: true
  }
)
securityEventSqlModel.belongsTo(
  sequelize.models.User, {
    foreignKey: 'user'
  }
)
securityEventSqlModel.belongsTo(
  sequelize.models.Actor, {
    foreignKey: 'actor'
  }
)
export default securityEventSqlModel