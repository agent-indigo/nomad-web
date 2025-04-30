import SqlRecord from '@/types/SqlRecord'
export default interface AccountIdentityProofSqlRecord extends SqlRecord {
  account_id?: string
  provider: string
  provider_username: string
  token: string
  verified: boolean
  live: boolean
}