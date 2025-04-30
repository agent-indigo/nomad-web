import SqlRecord from '@/types/SqlRecord'
export default interface StatusSqlRecord extends SqlRecord {
  account_id: string
  in_reply_to_id?: string
  reblog_of_id?: string
  in_reply_to_account_id?: string
  uri?: string
  visibility: number
  text: string
  sensitive: boolean
  spoiler_text: string
  reply: boolean
  url?: string
  language?: string
  conversation_id?: string
  local?: boolean
  application_id?: string
  poll_id?: string
  deleted_at?: string
}