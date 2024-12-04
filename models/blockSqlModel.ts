import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import BlockSqlRecord from '@/interfaces/BlockSqlRecord'
import createId from '@/utilities/createId'
const blockSqlModel: ModelStatic<Model<BlockSqlRecord>> = sequelize.models.Block ?? sequelize.define<Model<BlockSqlRecord>>(
  'Block', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'blocks',
    timestamps: true
  }
)
blockSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
blockSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'target_account_id'
  }
)
export default blockSqlModel