import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import StatusPinSqlRecord from '@/interfaces/StatusPinSqlRecord'
import createId from '@/utilities/createId'
const statusPinSqlModel: ModelStatic<Model<StatusPinSqlRecord>> = sequelize.models.StatusPin ?? sequelize.define<Model<StatusPinSqlRecord>>(
  'StatusPin', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Status',
        key: 'id'
      }
    }
  }, {
    tableName: 'status_pins',
    timestamps: true
  }
)
statusPinSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
statusPinSqlModel.hasOne(
  sequelize.models.Status, {
    foreignKey: 'status_id'
  }
)
export default statusPinSqlModel