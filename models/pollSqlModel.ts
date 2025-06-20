import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import PollSqlRecord from '@/types/PollSqlRecord'
import createId from '@/utilities/createId'
import { truncate } from 'node:fs'
const pollSqlModel: ModelStatic<Model<PollSqlRecord>> = sequelize.models.Poll ?? sequelize.define<Model<PollSqlRecord>>(
  'Poll', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    options: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      unique: true
    },
    cached_tallies: {
      type: DataTypes.ARRAY(DataTypes.BIGINT),
      unique: truncate
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
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lock_version: {
      type: DataTypes.FLOAT,
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
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    tableName: 'polls',
    timestamps: true
  }
)
export default pollSqlModel