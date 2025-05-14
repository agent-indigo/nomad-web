import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AccountTagStatsSqlRecord from '@/types/AccountTagStatsSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AccountTagStatsSqlRecord>>(
  'account_tag_stats', {
    ...createId(),
    tag_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Tag',
        key: 'id'
      }
    },
    accounts_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_tag_stats')