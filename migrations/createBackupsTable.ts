import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import BackupSqlRecord from '@/types/BackupSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<BackupSqlRecord>>(
  'backups', {
    ...createId(),
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    processed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    dump_file_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dump_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dump_file_size: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    dump_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('backups')