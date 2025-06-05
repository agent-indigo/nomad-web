import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import TagSqlRecord from '@/types/TagSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<TagSqlRecord>>(
  'tags', {
    ...createId(),
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    trendable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    listable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    reviewed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_status_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    max_score: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    max_score_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('tags')