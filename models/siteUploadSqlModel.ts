import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import SiteUploadSqlRecord from '@/types/SiteUploadSqlRecord'
import createId from '@/utilities/createId'
const siteUploadSqlModel: ModelStatic<Model<SiteUploadSqlRecord>> = sequelize.models.SiteUpload ?? sequelize.define<Model<SiteUploadSqlRecord>>(
  'SiteUpload', {
    ...createId(),
    var: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    file_file_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_file_size: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    meta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    file_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'site_uploads',
    timestamps: true
  }
)
export default siteUploadSqlModel