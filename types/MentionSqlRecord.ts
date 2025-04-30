import SqlRecord from '@/types/SqlRecord'
export default interface MentionSqlRecord extends SqlRecord {
  status_id: string
  account_id: string
  silent: boolean
}