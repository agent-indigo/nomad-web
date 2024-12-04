import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import EmailDomainBlockSqlRecord from '@/interfaces/EmailDomainBlockSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<EmailDomainBlockSqlRecord>>(
  'email_domain_blocks', {
    ...createId(),
    domain: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('email_domain_blocks')