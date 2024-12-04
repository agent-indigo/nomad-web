import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import RelaySqlRecord from '@/interfaces/RelaySqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<RelaySqlRecord>>(
  'relays', {
    ...createId(),
    inbox_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    state: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    follow_activity_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('relays')