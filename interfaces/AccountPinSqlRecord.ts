import SqlRecord from '@/interfaces/SqlRecord'
export default interface AccountPinSqlRecord extends SqlRecord {
  account_id?: string
  target_account_id?: string
}