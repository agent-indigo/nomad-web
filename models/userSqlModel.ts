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
      ],
      unique: [
        'root'
      ]
    }
  }, {
    tableName: 'users',
    timestamps: true,
    hooks: {
      beforeDestroy: async (user: Model<UserSqlRecord>): Promise<void> => {
        if (user.toJSON().roles.includes('root')) throw new Error('The root user shouldn\'t be deleted.')
      }
    }
  }
)
export default userSqlModel