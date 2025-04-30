import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import UserInviteRequestSqlRecord from '@/types/UserInviteRequestSqlRecord'
import createId from '@/utilities/createId'
const userInviteRequestSqlModel: ModelStatic<Model<UserInviteRequestSqlRecord>> = sequelize.models.UserInviteRequest ?? sequelize.define<Model<UserInviteRequestSqlRecord>>(
  'UserInviteRequest', {
    ...createId(),
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'user_invite_requests',
    timestamps: true
  }
)
export default userInviteRequestSqlModel