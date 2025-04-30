import SqlRecord from '@/types/SqlRecord'
export default interface AccountAliasSqlRecord extends SqlRecord {
  account_id?: string
  acct: string
  uri: string
}