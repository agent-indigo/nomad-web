import SqlRecord from '@/types/SqlRecord'
export default interface AccountModerationNoteSqlRecord extends SqlRecord {
  account_id: string
  target_account_id: string
  content: string
}