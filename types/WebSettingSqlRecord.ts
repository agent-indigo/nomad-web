import SqlRecord from '@/types/SqlRecord'
export default interface WebSettingSqlRecord extends SqlRecord {
  user_id: string
  data?: string
}