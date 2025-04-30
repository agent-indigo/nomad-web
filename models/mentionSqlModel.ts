import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import MentionSqlRecord from '@/types/MentionSqlRecord'
import createId from '@/utilities/createId'
const mentionSqlModel: ModelStatic<Model<MentionSqlRecord>> = sequelize.models.Mention ?? sequelize.define<Model<MentionSqlRecord>>(
  'Mention', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    silent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    tableName: 'mentions',
    timestamps: true
  }
)
export default mentionSqlModel