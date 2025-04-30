import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import FavouriteSqlRecord from '@/types/FavouriteSqlRecord'
import createId from '@/utilities/createId'
const favouriteSqlModel: ModelStatic<Model<FavouriteSqlRecord>> = sequelize.models.Favourite ?? sequelize.define<Model<FavouriteSqlRecord>>(
  'Favourite', {
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
    }
  }, {
    tableName: 'favourites',
    timestamps: true
  }
)
export default favouriteSqlModel