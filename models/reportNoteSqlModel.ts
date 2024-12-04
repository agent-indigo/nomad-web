import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ReportNoteSqlRecord from '@/interfaces/ReportNoteSqlRecord'
import createId from '@/utilities/createId'
const reportNoteSqlModel: ModelStatic<Model<ReportNoteSqlRecord>> = sequelize.models.ReportNote ?? sequelize.define<Model<ReportNoteSqlRecord>>(
  'ReportNote', {
    ...createId(),
    report_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'Report',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.TEXT,
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
    tableName: 'report_notes',
    timestamps: true
  }
)
reportNoteSqlModel.hasOne(
  sequelize.models.Report, {
    foreignKey: 'report_id'
  }
)
reportNoteSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
export default reportNoteSqlModel