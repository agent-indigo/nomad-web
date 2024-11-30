import SqlRecord from '@/interfaces/SqlRecord'
export default interface BookmarkSqlRecord extends SqlRecord {
  account_id: string
  status_id: string
}