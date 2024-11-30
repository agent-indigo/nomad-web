import SqlRecord from '@/interfaces/SqlRecord'
export default interface MarkerSqlRecord extends SqlRecord {
  user_id?: string
  timeline: string
  last_read_id: string
  lock_version: number
}