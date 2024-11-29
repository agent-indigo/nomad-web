import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import SecurityEventSqlRecord from '@/interfaces/SecurityEventSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<SecurityEventSqlRecord>>(
  'securityEvents', {
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
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('securityEvents')