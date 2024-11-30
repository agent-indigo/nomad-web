import SqlRecord from '@/interfaces/SqlRecord'
export default interface SessionActivationSqlRecord extends SqlRecord {
  user_id: string
  access_token_id?: number
  session_id: string
  user_agent: string
  ip?: string
  web_push_subscription_id?: number
}