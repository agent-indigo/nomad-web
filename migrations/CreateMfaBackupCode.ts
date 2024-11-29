import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import MfaBackupCodeSqlRecord from '@/interfaces/MfaBackupCodeSqlRecord'
import createId from '@/utilities/createId'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<MfaBackupCodeSqlRecord>>(
  'mfaBackupCodes', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    used: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
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
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('mfaBackupCodes')