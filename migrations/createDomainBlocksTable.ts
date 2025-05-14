import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import DomainBlockSqlRecord from '@/types/DomainBlockSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<DomainBlockSqlRecord>>(
  'domain_blocks', {
    ...createId(),
    domain: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    reject_media: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    reject_reports: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    severity: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    private_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    public_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('domain_blocks')