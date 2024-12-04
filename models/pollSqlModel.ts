import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import PollSqlRecord from '@/interfaces/PollSqlRecord'
import createId from '@/utilities/createId'
const pollSqlModel: ModelStatic<Model<PollSqlRecord>> = sequelize.models.Poll ?? sequelize.define<Model<PollSqlRecord>>(
  'Poll', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    options: {
      type: [DataTypes.TEXT]
    },
    cached_tallies: {
      type: [DataTypes.NUMBER]
    },
    multiple: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    hide_totals: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    votes_count: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 0
    },
    lock_version: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_fetched_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    voters_count: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'polls',
    timestamps: true
  }
)
pollSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
pollSqlModel.hasOne(
  sequelize.models.Status, {
    foreignKey: 'status_id'
  }
)
export default pollSqlModel