import SqlRecord from '@/interfaces/SqlRecord'
export default interface BlockSqlRecord extends SqlRecord {
  account_id: string
  target_account_id: string
  uri?: string
}