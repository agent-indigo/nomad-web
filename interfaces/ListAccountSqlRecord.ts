import SqlRecord from '@/interfaces/SqlRecord'
export default interface ListAccountSqlRecord extends SqlRecord {
  list_id: string
  account_id: string
  follow_id?: string
}