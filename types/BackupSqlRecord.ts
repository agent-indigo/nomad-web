import SqlRecord from '@/types/SqlRecord'
export default interface BackupSqlRecord extends SqlRecord {
  user_id?: string
  processed: boolean
  dump_file_name?: string
  dump_content_type?: string
  dump_file_size?: number
  dump_updated_at?: string
}