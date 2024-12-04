import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import FollowRequestSqlRecord from '@/interfaces/FollowRequestSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<FollowRequestSqlRecord>>(
  'follow_requests', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    show_reblogs: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('follow_requests')