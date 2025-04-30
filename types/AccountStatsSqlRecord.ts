import SqlRecord from '@/types/SqlRecord'
export default interface AccountStatsSqlRecord extends SqlRecord {
  account_id: string
  statuses_count: number
  following_count: number
  followers_count: number
  lock_version: number
  last_status_at?: string
}