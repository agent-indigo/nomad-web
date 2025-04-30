import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import TombstoneSqlRecord from '@/types/TombstoneSqlRecord'
import createId from '@/utilities/createId'
const tombstoneSqlModel: ModelStatic<Model<TombstoneSqlRecord>> = sequelize.models.Tombstone ?? sequelize.define<Model<TombstoneSqlRecord>>(
  'Tombstone', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false,
      index: true
    },
    by_moderator: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    tableName: 'tombstones',
    timestamps: true
  }
)
export default tombstoneSqlModel