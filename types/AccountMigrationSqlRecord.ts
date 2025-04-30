import SqlRecord from '@/types/SqlRecord'
export default interface AccountMigrationSqlRecord extends SqlRecord {
  account_id?: string
  target_account_id?: string
  acct: string
  followers_count: number
}