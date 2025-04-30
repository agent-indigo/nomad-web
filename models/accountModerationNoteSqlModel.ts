import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountModerationNoteSqlRecord from '@/types/AccountModerationNoteSqlRecord'
import createId from '@/utilities/createId'
const accountModerationNoteSqlModel: ModelStatic<Model<AccountModerationNoteSqlRecord>> = sequelize.models.AccountModerationNote ?? sequelize.define<Model<AccountModerationNoteSqlRecord>>(
  'AccountModerationNote', {
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'account_moderation_notes',
    timestamps: true
  }
)
export default accountModerationNoteSqlModel