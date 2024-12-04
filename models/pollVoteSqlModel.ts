import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import PollVoteSqlRecord from '@/interfaces/PollVoteSqlRecord'
import createId from '@/utilities/createId'
const pollVoteSqlModel: ModelStatic<Model<PollVoteSqlRecord>> = sequelize.models.PollVote ?? sequelize.define<Model<PollVoteSqlRecord>>(
  'PollVote', {
    ...createId(),
    account_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    poll_id: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'Poll',
        key: 'id'
      }
    },
    choice: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'poll_votes',
    timestamps: true
  }
)
pollVoteSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
pollVoteSqlModel.hasOne(
  sequelize.models.Poll, {
    foreignKey: 'poll_id'
  }
)
export default pollVoteSqlModel