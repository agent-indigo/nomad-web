import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import DomainBlockSqlRecord from '@/types/DomainBlockSqlRecord'
import createId from '@/utilities/createId'
const domainBlockSqlModel: ModelStatic<Model<DomainBlockSqlRecord>> = sequelize.models.DomainBlock ?? sequelize.define<Model<DomainBlockSqlRecord>>(
  'DomainBlock', {
    ...createId(),
    domain: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    reject_media: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    reject_reports: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    severity: {
      type: DataTypes.NUMBER,
      allowNull: true
    },
    private_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    public_comment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'domain_blocks',
    timestamps: true
  }
)
export default domainBlockSqlModel