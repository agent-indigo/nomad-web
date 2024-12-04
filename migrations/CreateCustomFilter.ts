import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import CustomFilterSqlRecord from '@/interfaces/CustomFilterSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<CustomFilterSqlRecord>>(
  'custom_filters', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    phrase: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    context: {
      type: [DataTypes.TEXT]
    },
    irreversible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    whole_word: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('custom_filters')