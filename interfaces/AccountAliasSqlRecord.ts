import SqlRecord from '@/interfaces/SqlRecord'
export default interface AccountAliasSqlRecord extends SqlRecord {
  account_id?: string
  acct: string
  uri: string
}