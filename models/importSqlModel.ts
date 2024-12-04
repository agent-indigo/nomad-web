import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ImportSqlRecord from '@/interfaces/ImportSqlRecord'
import createId from '@/utilities/createId'
const importSqlModel: ModelStatic<Model<ImportSqlRecord>> = sequelize.models.Import ?? sequelize.define<Model<ImportSqlRecord>>(
  'Import', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    overwrite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    data_file_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_file_size: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    data_updated_at: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'imports',
    timestamps: true
  }
)
importSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
export default importSqlModel