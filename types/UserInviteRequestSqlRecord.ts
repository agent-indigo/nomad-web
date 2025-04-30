import SqlRecord from '@/types/SqlRecord'
export default interface UserInviteRequestSqlRecord extends SqlRecord {
  user_id?: string
  text?: string
}