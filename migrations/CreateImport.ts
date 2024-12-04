import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import ImportSqlRecord from '@/interfaces/ImportSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<ImportSqlRecord>>(
  'imports', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    overwrite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    data_file_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_file_size: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    data_updated_at: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('imports')