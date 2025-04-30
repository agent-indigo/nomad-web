import SqlRecord from '@/types/SqlRecord'
export default interface AnnouncementMuteSqlRecord extends SqlRecord {
  account_id?: string
  announcement_id?: string
}