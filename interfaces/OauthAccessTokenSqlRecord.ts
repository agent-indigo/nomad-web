import SqlRecord from '@/interfaces/SqlRecord'
export default interface OauthAccessTokenSqlRecord extends SqlRecord {
  application_id?: string
  resource_owner_id?: string
  token: string
  refresh_token?: string
  expires_in?: string
  revoked_at?: string
  scopes?: string
}