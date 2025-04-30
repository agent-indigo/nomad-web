import SqlRecord from '@/types/SqlRecord'
export default interface ReportSqlRecord extends SqlRecord {
  account_id: string
  target_account_id: string
  action_taken_by_account_id?: string
  assigned_account_id?: string
  status_ids: string[]
  comment: string
  action_taken: boolean
  uri?: string
}