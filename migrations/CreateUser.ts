import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utilities/createId'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<UserSqlRecord>>(
  'users', {
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
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('users')