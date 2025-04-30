import SqlRecord from '@/types/SqlRecord'
export default interface AnnouncementSqlRecord extends SqlRecord {
  text: string
  published: boolean
  all_day: boolean
  scheduled_at?: string
  starts_at?: string
  ends_at?: string
  published_at?: string
}