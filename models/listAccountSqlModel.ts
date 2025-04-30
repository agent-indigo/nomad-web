import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ListAccountSqlRecord from '@/types/ListAccountSqlRecord'
import createId from '@/utilities/createId'
const listAccountSqlModel: ModelStatic<Model<ListAccountSqlRecord>> = sequelize.models.ListAccount ?? sequelize.define<Model<ListAccountSqlRecord>>(
  'ListAccount', {
    ...createId(),
    list_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'List',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    follow_id: {
      type: DataTypes.UUID,
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
export default listAccountSqlModel