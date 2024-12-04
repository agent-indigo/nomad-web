import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import StatusSqlRecord from '@/interfaces/StatusSqlRecord'
import createId from '@/utilities/createId'
const statusSqlModel: ModelStatic<Model<StatusSqlRecord>> = sequelize.models.Status ?? sequelize.define<Model<StatusSqlRecord>>(
  'Status', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    in_reply_to_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    reblog_of_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Status',
        key: 'id'
      }
    },
    in_reply_to_account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: true,
      unique: true
    },
    visibility: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sensitive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    spoiler_text: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    reply: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conversation_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    local: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    application_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    poll_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'statuses',
    timestamps: true
  }
)
statusSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'account_id'
  }
)
statusSqlModel.hasOne(
  sequelize.models.Status, {
    foreignKey: 'in_reply_to_id'
  }
)
statusSqlModel.hasOne(
  sequelize.models.Status, {
    foreignKey: 'reblog_of_id'
  }
)
statusSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'in_reply_to_account_id'
  }
)
export default statusSqlModel