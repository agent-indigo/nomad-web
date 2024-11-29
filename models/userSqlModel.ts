import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
import createId from '@/utilities/createId'
const userSqlModel: ModelStatic<Model<UserSqlRecord>> = sequelize.models.User ?? sequelize.define<Model<UserSqlRecord>>(
  'User', {
    ...createId(),
    email: {
      type: DataTypes.STRING,
      allowNull: [
        false,
        'Please provide a valid email address.'
      ],
      unique: [
        true,
        'A user with the provided email address already exists.'
      ],
      validate: {
        isEmail: true
      }
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: [
        false,
        'Please provide a secure password.'
      ]
    },
    roles: {
      type: [DataTypes.ENUM(
        'admin',
        'dev',
        'mod',
        'root',
        'user'
      )],
      allowNull: [
        false,
        'Please assign at least one role.'
      ],
      defaultValue: [
        'user'
      ]
    },
    actors: {
      type: [DataTypes.STRING]
    },
    prefs: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mfaEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    hashedMfaSecret: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hashedMfaBackus: {
      type: [DataTypes.STRING]
    },
    suspended: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    securityEvents: {
      type: [DataTypes.STRING]
    }
  }, {
    tableName: 'users',
    timestamps: true,
    hooks: {
      beforeCreate: async (user: Model<UserSqlRecord>): Promise<void> => {
        if (user.toJSON().roles.includes('root')) if (await userSqlModel.findOne({
          where: {
            roles: [
              'root'
            ]
          }
        })) throw new Error('The root user already exists.')
      },
      beforeDestroy: async (user: Model<UserSqlRecord>): Promise<void> => {
        if (user.toJSON().roles.includes('root')) throw new Error('The root user shouldn\'t be deleted.')
      }
    }
  }
)
userSqlModel.hasMany(
  sequelize.models.Actor, {
    foreignKey: 'actors'
  }
)
userSqlModel.hasOne(
  sequelize.models.Prefs, {
    foreignKey: 'prefs'
  }
)
userSqlModel.hasMany(
  sequelize.models.HashedMfaBackup, {
    foreignKey: 'hashedMfaBackus'
  }
)
userSqlModel.hasMany(
  sequelize.models.SecurityEvent, {
    foreignKey: 'securityEvents'
  }
)
export default userSqlModel