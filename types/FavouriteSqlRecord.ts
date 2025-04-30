import SqlRecord from '@/types/SqlRecord'
export default interface FavouriteSqlRecord extends SqlRecord {
  account_id: string
  status_id: string
}