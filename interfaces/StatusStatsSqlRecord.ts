import SqlRecord from '@/interfaces/SqlRecord'
export default interface StatusStatsSqlRecord extends SqlRecord {
  status_id: string
  replies_count: number
  reblogs_count: number
  favourites_count: number
}