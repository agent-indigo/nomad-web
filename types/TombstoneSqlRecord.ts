import SqlRecord from '@/types/SqlRecord'
export default interface TombstoneSqlRecord extends SqlRecord {
  account_id?: number
  uri: string
  by_moderator?: boolean
}