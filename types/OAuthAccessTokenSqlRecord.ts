import SqlRecord from '@/types/SqlRecord'
export default interface OAuthAccessTokenSqlRecord extends SqlRecord {
  application_id?: string
  resource_owner_id?: string
  token: string
  refresh_token?: string
  expires_in?: string
  revoked_at?: string
  scopes?: string
}