import {
  DataTypes,
  Model,
  QueryInterface
} from 'sequelize'
import AccountIdentityProofSqlRecord from '@/types/AccountIdentityProofSqlRecord'
import createId from '@/utilities/createId'
import createTimeStamps from '@/utilities/createTimeStamps'
export const up: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.createTable<Model<AccountIdentityProofSqlRecord>>(
  'account_identity_proofs', {
    ...createId(),
    account_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'Account',
        key: 'id'
      }
    },
    provider: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    provider_username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    live: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    ...createTimeStamps()
  }
)
export const down: Function = async (queryInterface: QueryInterface): Promise<void> => await queryInterface.dropTable('account_identity_proofs')