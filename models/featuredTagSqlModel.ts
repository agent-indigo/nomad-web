import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import FeaturedTagSqlRecord from '@/types/FeaturedTagSqlRecord'
import createId from '@/utilities/createId'
const featuredTagSqlModel: ModelStatic<Model<FeaturedTagSqlRecord>> = sequelize.models.FeaturedTag ?? sequelize.define<Model<FeaturedTagSqlRecord>>(
  'FeaturedTag', {
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
    }
  }, {
    tableName: 'featured_tags',
    timestamps: true
  }
)
export default featuredTagSqlModel