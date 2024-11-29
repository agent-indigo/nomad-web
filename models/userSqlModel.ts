import {
  DataTypes,
  Model,
  ModelStatic
} from 'sequelize'
import sequelize from '@/config/sequelize'
import UserSqlRecord from '@/interfaces/UserSqlRecord'
import createId from '@/utilities/createId'
const userSqlModel: ModelStatic<Model<UserSqlRecord>> = sequelize.models.User ?? sequelize.define<Model<UserSqlRecord>>(
  'User', {
    ...createId(),
    email: {
      type: DataTypes.STRING,
      allowNull: [
        false,
        'Please provide a valid email address.'
      ],
      unique: [
        true,
        'A user with the provided email address already exists.'
      ],
      validate: {
        isEmail: true
      }
    },
    encrypted_password: {
      type: DataTypes.STRING,
      allowNull: [
        false,
        'Please provide a secure password.'
      ]
    }
  }, {
    tableName: 'users',
    timestamps: true
  }
)
export default userSqlModel