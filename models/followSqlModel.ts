import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import FollowSqlRecord from '@/interfaces/FollowSqlRecord'
import createId from '@/utilities/createId'
const followSqlModel: ModelStatic<Model<FollowSqlRecord>> = sequelize.models.Follow ?? sequelize.define<Model<FollowSqlRecord>>(
  'Follow', {
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
    show_reblogs: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'follows',
    timestamps: true
  }
)
followSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
followSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'target_account_id'
  }
)
export default followSqlModel