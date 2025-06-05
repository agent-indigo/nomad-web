import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountTagStatsSqlRecord from '@/types/AccountTagStatsSqlRecord'
import createId from '@/utilities/createId'
const accountTagStatsSqlModel: ModelStatic<Model<AccountTagStatsSqlRecord>> = sequelize.models.AccountTagStats ?? sequelize.define<Model<AccountTagStatsSqlRecord>>(
  'AccountTagStats', {
    ...createId(),
    tag_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Tag',
        key: 'id'
      }
    },
    accounts_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'account_tag_stats',
    timestamps: true
  }
)
export default accountTagStatsSqlModel