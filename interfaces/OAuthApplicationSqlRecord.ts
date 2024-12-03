import SqlRecord from '@/interfaces/SqlRecord'
export default interface OAuthApplicationSqlRecord extends SqlRecord {
  owner_id?: number
  uid: string
  owner_type?: string
  name: string
  secret: string
  redirect_url?: string
  scopes: string
  superapp: boolean
  confidential: boolean
  website?: string
}