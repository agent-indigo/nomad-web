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
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    invite_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Invite',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.TEXT,
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
    reset_password_token: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    confirmation_token: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    remember_token: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    encrypted_password: {
      type: DataTypes.TEXT,
      allowNull: [
        false,
        'Please provide a secure password.'
      ]
    },
    sign_in_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    otp_required_for_login: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filtered_languages: {
      type: [DataTypes.TEXT]
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    moderator: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    reset_password_sent_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remember_created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    current_sign_in_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_sign_in_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    current_sign_in_ip: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isIP: true
      }
    },
    last_sign_in_ip: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isIP: true
      }
    },
    confirmed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    confirmation_sent_at: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    unconfirmed_email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    locale: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    encrypted_otp_secret: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    encrypted_otp_secret_iv: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    encrypted_otp_secret_salt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    consumed_timestep: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 0
    },
    last_emailed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    otp_backup_codes: {
      type: [DataTypes.TEXT]
    },
    chosen_languages: {
      type: [DataTypes.TEXT]
    },
    created_by_application_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'OAuthApplication',
        key: 'id'
      }
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('users')