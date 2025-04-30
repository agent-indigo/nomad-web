import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountWarningPresetSqlRecord from '@/types/AccountWarningPresetSqlRecord'
import createId from '@/utilities/createId'
const accountWarningPresetSqlModel: ModelStatic<Model<AccountWarningPresetSqlRecord>> = sequelize.models.AccountWarningPreset ?? sequelize.define<Model<AccountWarningPresetSqlRecord>>(
  'AccountWarningPreset', {
    ...createId(),
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'account_warning_presets',
    timestamps: true
  }
)
export default accountWarningPresetSqlModel