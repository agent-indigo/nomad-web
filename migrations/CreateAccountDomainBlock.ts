import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
import AccountDomainBlockSqlRecord from '@/interfaces/AccountDomainBlockSqlRecord'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AccountDomainBlockSqlRecord>>(
  'account_domain_blocks', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    domain: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_domain_blocks')