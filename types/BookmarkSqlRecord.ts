import SqlRecord from '@/types/SqlRecord'
export default interface BookmarkSqlRecord extends SqlRecord {
  account_id: string
  status_id: string
}