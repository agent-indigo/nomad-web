import SqlRecord from '@/types/SqlRecord'
export default interface PreviewCardSqlRecord extends SqlRecord {
  url: string
  title: string
  description: string
  type: number
  html: string
  author_name: string
  author_url: string
  provider_name: string
  provider_url: string
  width: number
  height: number
  embed_url: string
  image_file_name?: string
  image_content_type?: string
  image_file_size?: number
  image_updated_at?: string
}