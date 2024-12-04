import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ListSqlRecord from '@/interfaces/ListSqlRecord'
import createId from '@/utilities/createId'
const listSqlModel: ModelStatic<Model<ListSqlRecord>> = sequelize.models.List ?? sequelize.define<Model<ListSqlRecord>>(
  'List', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'List',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'lists',
    timestamps: true
  }
)
listSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
export default listSqlModel