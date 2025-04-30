import SqlRecord from '@/types/SqlRecord'
export default interface ConversationMuteSqlRecord extends SqlRecord {
  conversation_id: string
  account_id: string
}