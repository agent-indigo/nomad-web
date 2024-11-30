import SqlRecord from '@/interfaces/SqlRecord'
export default interface NotificationSqlRecord extends SqlRecord {
  account_id: string
  from_account_id: string
  activity_id: string
  activity_type: string
}