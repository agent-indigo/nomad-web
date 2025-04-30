import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import FollowSqlRecord from '@/types/FollowSqlRecord'
import createId from '@/utilities/createId'
const followSqlModel: ModelStatic<Model<FollowSqlRecord>> = sequelize.models.Follow ?? sequelize.define<Model<FollowSqlRecord>>(
  'Follow', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.UUID,
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
export default followSqlModel