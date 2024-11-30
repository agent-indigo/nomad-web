import SqlRecord from '@/interfaces/SqlRecord'
export default interface WebPushSubscriptionSqlRecord extends SqlRecord {
  access_token_id?: string
  user_id?: string
  endpoint: string
  key_p256dh: string
  key_auth: string
  data?: string
}