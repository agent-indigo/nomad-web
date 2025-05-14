import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import SiteUploadSqlRecord from '@/types/SiteUploadSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<SiteUploadSqlRecord>>(
  'site_uploads', {
    ...createId(),
    var: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    file_file_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_file_size: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    meta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('site_uploads')