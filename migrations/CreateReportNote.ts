import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import ReportNoteSqlRecord from '@/interfaces/ReportNoteSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<ReportNoteSqlRecord>>(
  'report_notes', {
    ...createId(),
    report_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Report',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('report_notes')