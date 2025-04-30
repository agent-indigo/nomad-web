import SqlRecord from '@/types/SqlRecord'
export default interface ListSqlRecord extends SqlRecord {
  account_id: string
  title: string
}