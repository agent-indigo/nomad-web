import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import InviteSqlRecord from '@/interfaces/InviteSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<InviteSqlRecord>>(
  'invites', {
    ...createId(),
    user_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    uses: {
      type: DataTypes.NUMBER,
      allowNull: false,
      defaultValue: 1
    },
    autofollow: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    max_uses: {
      type: DataTypes.NUMBER,
      allowNull: true,
      defaultValue: 1
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('invites')