import SqlRecord from '@/interfaces/SqlRecord'
export default interface OauthAccessGrantSqlRecord extends SqlRecord {
  application_id: string
  resource_owner_id: string
  token: string
  expires_in: number
  redirect_url: string
  revoked_at?: string
  scopes?: string
}