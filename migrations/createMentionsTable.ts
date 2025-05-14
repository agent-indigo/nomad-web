import {
  DataTypes,
  Model,
  QueryInterface
} from "sequelize";
import MentionSqlRecord from "@/types/MentionSqlRecord";
import createId from "@/utilities/createId";
import createTimeStamps from "@/utilities/createTimeStamps";
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<MentionSqlRecord>>(
  'mentions', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    silent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('mentions')