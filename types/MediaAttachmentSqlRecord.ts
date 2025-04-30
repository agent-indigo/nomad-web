import SqlRecord from '@/types/SqlRecord'
export default interface MediaAttachmentSqlRecord extends SqlRecord {
  status_id?: string
  account_id?: string
  scheduled_status_id?: string
  shortcode?: string
  remote_url: string
  type: string
  file_file_name?: string
  file_content_type?: string
  file_file_size?: number
  file_meta?: string
  description?: string
  blurhash?: string
  file_updated_at?: string
}