import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import MfaBackupCodeSqlRecord from '@/interfaces/MfaBackupCodeSqlRecord'
import createId from '@/utilities/createId'
const mfaBackupCodeSqlModel: ModelStatic<Model<MfaBackupCodeSqlRecord>> = sequelize.models.MfaBackupCode ?? sequelize.define<Model<MfaBackupCodeSqlRecord>>(
  'MfaBackupCode', {
    ...createId(),
    user: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    used: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'mfaBackupCodes',
    timestamps: true
  }
)
mfaBackupCodeSqlModel.belongsTo(
  sequelize.models.User, {
    foreignKey: 'user'
  }
)
export default mfaBackupCodeSqlModel