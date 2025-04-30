import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import TagSqlRecord from '@/types/TagSqlRecord'
import createId from '@/utilities/createId'
const tagSqlModel: ModelStatic<Model<TagSqlRecord>> = sequelize.models.Tag ?? sequelize.define<Model<TagSqlRecord>>(
  'Tag', {
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
      type: DataTypes.NUMBER,
      allowNull: true
    },
    max_score_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tags',
    timestamps: true
  }
)
export default tagSqlModel