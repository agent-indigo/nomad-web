import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import MuteSqlRecord from '@/interfaces/MuteSqlRecord'
import createId from '@/utilities/createId'
const muteSqlModel: ModelStatic<Model<MuteSqlRecord>> = sequelize.models.Mute ?? sequelize.define<Model<MuteSqlRecord>>(
  'Mute', {
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
    hide_notifications: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: true
    }
  }, {
    tableName: 'mutes',
    timestamps: true
  }
)
muteSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
muteSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'target_account_id'
  }
)
export default muteSqlModel