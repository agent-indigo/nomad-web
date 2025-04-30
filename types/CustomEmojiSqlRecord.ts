import SqlRecord from '@/types/SqlRecord'
export default interface CustomEmojiSqlRecord extends SqlRecord {
  shortcode: string
  domain?: string
  disabled: boolean
  visible_in_picker: boolean
  image_file_name?: string
  image_content_type?: string
  image_file_size?: number
  uri?: string
  image_remote_url?: string
  category_id?: string
  image_uploaded_at?: string
}