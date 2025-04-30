import SqlRecord from '@/types/SqlRecord'
export default interface RelaySqlRecord extends SqlRecord {
  inbox_url: string
  state: number
  follow_activity_id?: string
}