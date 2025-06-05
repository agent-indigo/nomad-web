import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountMigrationSqlRecord from '@/types/AccountMigrationSqlRecord'
import createId from '@/utilities/createId'
const accountMigrationSqlModel: ModelStatic<Model<AccountMigrationSqlRecord>> = sequelize.models.AccountMigration ?? sequelize.define<Model<AccountMigrationSqlRecord>>(
  'AccountMigration', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    acct: {
      type: DataTypes.TEXT
    },
    followers_count: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    tableName: 'account_migrations',
    timestamps: true
  }
)
export default accountMigrationSqlModel