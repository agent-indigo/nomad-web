import SqlRecord from '@/interfaces/SqlRecord'
export default interface MuteSqlRecord extends SqlRecord {
  account_id: string
  target_account_id: string
  hide_notifications: boolean
}