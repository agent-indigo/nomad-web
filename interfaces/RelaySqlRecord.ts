import SqlRecord from '@/interfaces/SqlRecord'
export default interface RelaySqlRecord extends SqlRecord {
  inbox_url: string
  state: number
  follow_activity_id?: string
}