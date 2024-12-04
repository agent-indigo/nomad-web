import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import TombstoneSqlRecord from '@/interfaces/TombstoneSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<TombstoneSqlRecord>>(
  'tombstones', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false,
      index: true
    },
    by_moderator: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('tombstones')