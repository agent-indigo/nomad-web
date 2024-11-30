import SqlRecord from '@/interfaces/SqlRecord'
export default interface AdminActionLogSqlRecord extends SqlRecord {
  account_id?: string
  target_type?: string
  target_id?: string
  action: string
  recorded_changes: string
}