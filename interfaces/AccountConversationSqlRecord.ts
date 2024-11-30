import SqlRecord from '@/interfaces/SqlRecord'
export default interface AccountConversationSqlRecord extends SqlRecord {
  account_id: string
  conversation_id: string
  participant_account_ids: string[]
  status_ids: string[]
  lock_version: number
  unread: boolean
  last_status_id?: string
}