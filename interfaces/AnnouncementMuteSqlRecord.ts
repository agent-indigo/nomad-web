import SqlRecord from '@/interfaces/SqlRecord'
export default interface AnnouncementMuteSqlRecord extends SqlRecord {
  account_id?: string
  announcement_id?: string
}