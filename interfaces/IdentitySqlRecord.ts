import SqlRecord from '@/interfaces/SqlRecord'
export default interface IdentitySqlRecord extends SqlRecord {
  user_id?: string
  provider: string
  uid: string
}