import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import ListAccountSqlRecord from '@/types/ListAccountSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<ListAccountSqlRecord>>(
  'list_accounts', {
    ...createId(),
    list_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'List',
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
    follow_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Follow',
        key: 'id'
      }
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('list_accounts')