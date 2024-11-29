import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import SecurityEventSqlRecord from '@/interfaces/SecurityEventSqlRecord'
import createId from '@/utilities/createId'
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
        'linked',
        'mfa disabled',
        'mfa enabled',
        'name changed',
        'password changed',
        'reinstated',
        'suspended',
        'unlinked'
      ),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('securityEvents')