import SqlRecord from '@/interfaces/SqlRecord'
export default interface AnnouncementReactionSqlRecord extends SqlRecord {
  account_id?: string
  announcement_id?: string
  custom_emoji_id?: string
  name: string
}