import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import FollowRequestSqlRecord from '@/types/FollowRequestSqlRecord'
import createId from '@/utilities/createId'
const followRequestSqlModel: ModelStatic<Model<FollowRequestSqlRecord>> = sequelize.models.FollowRequest ?? sequelize.define<Model<FollowRequestSqlRecord>>(
  'FollowRequest', {
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
    tableName: 'follow_requests',
    timestamps: true
  }
)
export default followRequestSqlModel