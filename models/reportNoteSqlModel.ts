import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ReportNoteSqlRecord from '@/types/ReportNoteSqlRecord'
import createId from '@/utilities/createId'
const reportNoteSqlModel: ModelStatic<Model<ReportNoteSqlRecord>> = sequelize.models.ReportNote ?? sequelize.define<Model<ReportNoteSqlRecord>>(
  'ReportNote', {
    ...createId(),
    report_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Report',
        key: 'id'
      }
    },
    account_id: {
      type: DataTypes.UUID,
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
export default reportNoteSqlModel