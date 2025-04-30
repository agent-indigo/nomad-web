import SqlRecord from '@/types/SqlRecord'
export default interface FollowRequestSqlRecord extends SqlRecord {
  account_id: string
  target_account_id: string
  show_reblogs: boolean
  uri?: string
}