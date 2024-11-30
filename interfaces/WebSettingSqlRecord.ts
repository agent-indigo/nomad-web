import SqlRecord from '@/interfaces/SqlRecord'
export default interface WebSettingSqlRecord extends SqlRecord {
  user_id: string
  data?: string
}