import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import InviteSqlRecord from '@/interfaces/InviteSqlRecord'
import createId from '@/utilities/createId'
const inviteSqlModel: ModelStatic<Model<InviteSqlRecord>> = sequelize.models.Invite ?? sequelize.define<Model<InviteSqlRecord>>(
  'Invite', {
    ...createId(),
    user_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    uses: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 1
    },
    autofollow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    max_uses: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 1
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'invites',
    timestamps: true
  }
)
inviteSqlModel.hasOne(
  sequelize.models.User, {
    foreignKey: 'user_id'
  }
)
export default inviteSqlModel