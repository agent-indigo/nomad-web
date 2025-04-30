import SqlRecord from '@/types/SqlRecord'
export default interface ScheduledStatusSqlRecord extends SqlRecord {
  account_id?: string
  scheduled_at?: string
  params?: string
}