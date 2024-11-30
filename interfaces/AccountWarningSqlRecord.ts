import SqlRecord from '@/interfaces/SqlRecord'
export default interface AccountWarningSqlRecord extends SqlRecord {
  account_id?: string
  target_account_id?: string
  action: number
  text: string
}