import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import ReportSqlRecord from '@/types/ReportSqlRecord'
import createId from '@/utilities/createId'
const reportSqlModel: ModelStatic<Model<ReportSqlRecord>> = sequelize.models.Report ?? sequelize.define<Model<ReportSqlRecord>>(
  'Report', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    target_account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    action_taken_by_account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    assigned_account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_ids: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    action_taken: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'reports',
    timestamps: true
  }
)
export default reportSqlModel