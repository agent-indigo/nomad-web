import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utilities/createId'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
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
    theme: {
      type: DataTypes.ENUM(
        'dark',
        'light',
        'system'
      ),
      allowNull: false,
      defaultValue: 'system'
    },
    mfaEnabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    mfaBackupCodes: {
      type: [DataTypes.STRING]
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    passwordChangedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mfaEnabledOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    mfaDisabledOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('users')