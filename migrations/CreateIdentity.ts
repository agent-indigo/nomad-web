import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import IdentitySqlRecord from '@/types/IdentitySqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<IdentitySqlRecord>>(
  'identities', {
    ...createId(),
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    provider: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('identities')