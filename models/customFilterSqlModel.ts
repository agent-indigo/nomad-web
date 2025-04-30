import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import CustomFilterSqlRecord from '@/types/CustomFilterSqlRecord'
import createId from '@/utilities/createId'
const customFilterSqlModel: ModelStatic<Model<CustomFilterSqlRecord>> = sequelize.models.CustomFilter ?? sequelize.define<Model<CustomFilterSqlRecord>>(
  'CustomFilter', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    phrase: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    context: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    },
    irreversible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    whole_word: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'custom_filters',
    timestamps: true
  }
)
export default customFilterSqlModel