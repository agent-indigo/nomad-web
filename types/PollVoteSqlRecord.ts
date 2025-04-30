import SqlRecord from '@/types/SqlRecord'
export default interface PollVoteSqlRecord extends SqlRecord {
  account_id?: string
  poll_id?: string
  choice: number
  uri: string
}