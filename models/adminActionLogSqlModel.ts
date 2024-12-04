import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AdminActionLogSqlRecord from '@/interfaces/AdminActionLogSqlRecord'
import createId from '@/utilities/createId'
const adminActionLogSqlModel: ModelStatic<Model<AdminActionLogSqlRecord>> = sequelize.models.AdminActionLog ?? sequelize.define<Model<AdminActionLogSqlRecord>>(
  'AdminActionLog', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    target_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    recorded_changes: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'admin_action_logs',
    timestamps: true
  }
)
adminActionLogSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
adminActionLogSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'target_id'
  }
)
export default adminActionLogSqlModel