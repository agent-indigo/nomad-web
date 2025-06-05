import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import FeaturedTagSqlRecord from '@/types/FeaturedTagSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<FeaturedTagSqlRecord>>(
  'featured_tags', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Tag',
        key: 'id'
      }
    },
    statuses_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    last_status_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('featured_tags')