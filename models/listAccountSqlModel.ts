import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ListAccountSqlRecord from '@/interfaces/ListAccountSqlRecord'
import createId from '@/utilities/createId'
const listAccountSqlModel: ModelStatic<Model<ListAccountSqlRecord>> = sequelize.models.ListAccount ?? sequelize.define<Model<ListAccountSqlRecord>>(
  'ListAccount', {
    ...createId(),
    list_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'List',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    follow_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Follow',
        key: 'id'
      }
    }
  }, {
    tableName: 'list_accounts',
    timestamps: true
  }
)
listAccountSqlModel.hasOne(
  sequelize.models.List, {
    foreignKey: 'list_id'
  }
)
listAccountSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
listAccountSqlModel.hasOne(
  sequelize.models.Follow, {
    foreignKey: 'follow_id'
  }
)
export default listAccountSqlModel