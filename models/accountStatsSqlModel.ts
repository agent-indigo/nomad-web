import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountStatsSqlRecord from '@/types/AccountStatsSqlRecord'
import createId from '@/utilities/createId'
const accountStatsSqlModel: ModelStatic<Model<AccountStatsSqlRecord>> = sequelize.models.AccountStats = sequelize.define<Model<AccountStatsSqlRecord>>(
  'AccountStats', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    statuses_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    following_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    followers_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lock_version: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    last_status_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'account_stats',
    timestamps: true
  }
)
export default accountStatsSqlModel