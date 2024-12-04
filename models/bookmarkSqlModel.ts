import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import BookmarkSqlRecord from '@/interfaces/BookmarkSqlRecord'
import createId from '@/utilities/createId'
const bookmarkSqlModel: ModelStatic<Model<BookmarkSqlRecord>> = sequelize.models.Bookmark ?? sequelize.define<Model<BookmarkSqlRecord>>(
  'Bookmark', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    }
  }, {
    tableName: 'bookmarks',
    timestamps: true
  }
)
bookmarkSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
bookmarkSqlModel.hasOne(
  sequelize.models.Status, {
    foreignKey: 'status_id'
  }
)
export default bookmarkSqlModel