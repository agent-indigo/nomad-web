import SqlRecord from '@/interfaces/SqlRecord'
export default interface ImportSqlRecord extends SqlRecord {
  account_id: string
  type: number
  approved: boolean
  overwrite: boolean
  data_file_name?: string
  data_content_type?: string
  data_file_size?: number
  data_updated_at?: string
}