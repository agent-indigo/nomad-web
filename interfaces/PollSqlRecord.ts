import SqlRecord from '@/interfaces/SqlRecord'
export default interface PollSqlRecord extends SqlRecord {
  account_id?: string
  status_id?: string
  options: string[]
  cached_tallies: number[]
  multiple: boolean
  hide_totals: boolean
  votes_count: number
  lock_version: number
  expires_at?: string
  last_fetched_at?: string
  voters_count?: number
}