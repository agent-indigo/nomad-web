import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import BackupSqlRecord from '@/types/BackupSqlRecord'
import createId from '@/utilities/createId'
const backupSqlModel: ModelStatic<Model<BackupSqlRecord>> = sequelize.models.Backup ?? sequelize.define<Model<BackupSqlRecord>>(
  'Backup', {
    ...createId(),
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    processed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    dump_file_name: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    dump_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dump_file_size: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    dump_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'backups',
    timestamps: true
  }
)
export default backupSqlModel