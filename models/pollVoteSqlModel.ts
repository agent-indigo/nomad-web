import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import PollVoteSqlRecord from '@/types/PollVoteSqlRecord'
import createId from '@/utilities/createId'
const pollVoteSqlModel: ModelStatic<Model<PollVoteSqlRecord>> = sequelize.models.PollVote ?? sequelize.define<Model<PollVoteSqlRecord>>(
  'PollVote', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    poll_id: {
      type: DataTypes.UUID,
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
export default pollVoteSqlModel