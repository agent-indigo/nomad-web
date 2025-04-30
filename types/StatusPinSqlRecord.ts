import SqlRecord from '@/types/SqlRecord'
export default interface StatusPinSqlRecord extends SqlRecord {
  account_id: string
  status_id: string
}