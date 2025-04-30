import SqlRecord from '@/types/SqlRecord'
export default interface TagSqlRecord extends SqlRecord {
  name: string
  usable?: boolean
  trendable?: boolean
  listable?: boolean
  reviewed_at?: string
  requested_review_at?: string
  last_status_at?: string
  max_score?: number
  max_score_at?: string
}