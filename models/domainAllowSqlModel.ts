import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import DomainAllowSqlRecord from '@/interfaces/DomainAllowSqlRecord'
import createId from '@/utilities/createId'
const domainAllowSqlModel: ModelStatic<Model<DomainAllowSqlRecord>> = sequelize.models.DomainAllow ?? sequelize.define<Model<DomainAllowSqlRecord>>(
  'DomainAllow', {
    ...createId(),
    domain: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'domain_allows',
    timestamps: true
  }
)
export default domainAllowSqlModel