import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import HashedMfaBackupSqlRecord from '@/interfaces/HashedMfaBackupSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<HashedMfaBackupSqlRecord>>(
  'hashedMfaBackups', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    used: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('hashedMfaBackups')