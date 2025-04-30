import SqlRecord from '@/types/SqlRecord'
export default interface SiteUploadSqlRecord extends SqlRecord {
  var: string
  file_file_name?: string
  file_content_type?: string
  file_file_size?: number
  meta?: string
  file_updated_at?: string
}