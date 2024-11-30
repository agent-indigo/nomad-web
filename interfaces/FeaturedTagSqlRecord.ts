import SqlRecord from '@/interfaces/SqlRecord'
export default interface FeaturedTagSqlRecord extends SqlRecord {
  account_id?: string
  tag_id?: string
  statuses_count: number
  last_status_at?: string
}