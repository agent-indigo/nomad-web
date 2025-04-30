import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import EmailDomainBlockSqlRecord from '@/types/EmailDomainBlockSqlRecord'
import createId from '@/utilities/createId'
const emailDomainBlockSqlModel: ModelStatic<Model<EmailDomainBlockSqlRecord>> = sequelize.models.EmailDomainBlock ?? sequelize.define<Model<EmailDomainBlockSqlRecord>>(
  'EmailDomainBlock', {
    ...createId(),
    domain: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'email_domain_blocks',
    timestamps: true
  }
)
export default emailDomainBlockSqlModel