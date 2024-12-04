import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import DomainAllowSqlRecord from '@/interfaces/DomainAllowSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<DomainAllowSqlRecord>>(
  'domain_allows', {
    ...createId(),
    domain: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('domain_allows')