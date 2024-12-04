import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import AccountSqlRecord from '@/interfaces/AccountSqlRecord'
import createId from '@/utilities/createId'
const accountSqlModel: ModelStatic<Model<AccountSqlRecord>> = sequelize.models.Account ?? sequelize.define<Model<AccountSqlRecord>>(
  'Account', {
    ...createId(),
    moved_to_account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    uri: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    secret: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    public_key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    remote_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    salmon_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    hub_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    display_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    header_remote_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    inbox_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    domain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    private_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avatar_file_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avatar_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avatar_file_size: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avatar_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    header_file_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    header_content_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    header_file_size: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    header_updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    avatar_remote_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    subscription_expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_webfingered_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    outbox_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    shared_inbox_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    followers_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    protocol: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    memorial: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    featured_collections_url: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    fields: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    actor_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    discoverable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    also_known_as: {
      type: [DataTypes.STRING]
    },
    silenced_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    suspended_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    trust_level: {
      type: DataTypes.NUMBER,
      allowNull: true
    }
  }, {
    tableName: 'accounts',
    timestamps: true
  }
)
accountSqlModel.hasOne(
  sequelize.models.Account, {
    foreignKey: 'moved_to_account_id'
  }
)
export default accountSqlModel