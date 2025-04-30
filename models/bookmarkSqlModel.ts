import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import BookmarkSqlRecord from '@/types/BookmarkSqlRecord'
import createId from '@/utilities/createId'
const bookmarkSqlModel: ModelStatic<Model<BookmarkSqlRecord>> = sequelize.models.Bookmark ?? sequelize.define<Model<BookmarkSqlRecord>>(
  'Bookmark', {
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
        model: 'Account',
        key: 'id'
      }
    }
  }, {
    tableName: 'bookmarks',
    timestamps: true
  }
)
export default bookmarkSqlModel