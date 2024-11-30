import SqlRecord from '@/interfaces/SqlRecord'
export default interface CustomFilterSqlRecord extends SqlRecord {
  account_id?: string
  phrase: string
  context: string[]
  irreversible: boolean
  whole_word: boolean
  expires_at?: string
}