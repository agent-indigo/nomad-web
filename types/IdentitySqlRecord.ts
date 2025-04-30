import SqlRecord from '@/types/SqlRecord'
export default interface IdentitySqlRecord extends SqlRecord {
  user_id?: string
  provider: string
  uid: string
}