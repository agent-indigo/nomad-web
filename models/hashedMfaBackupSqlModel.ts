import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import HashedMfaBackupSqlRecord from '@/interfaces/HashedMfaBackupSqlRecord'
import createId from '@/utilities/createId'
const hashedMfaBackupSqlModel: ModelStatic<Model<HashedMfaBackupSqlRecord>> = sequelize.models.HashedMfaBackup ?? sequelize.define<Model<HashedMfaBackupSqlRecord>>(
  'HashedMfaBackup', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    used: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'hashedMfaBackups',
    timestamps: true
  }
)
hashedMfaBackupSqlModel.belongsTo(
  sequelize.models.User, {
    foreignKey: 'user'
  }
)
export default hashedMfaBackupSqlModel