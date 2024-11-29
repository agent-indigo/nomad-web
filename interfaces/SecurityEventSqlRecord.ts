import SqlRecord from '@/interfaces/SqlRecord'
interface SecurityEventSqlRecord extends SqlRecord {
  user: string
  actor?: string
  event: 'email changed' | 'granted' | 'linked' | 'mfa disabled' | 'mfa enabled' | 'name changed' | 'password changed' | 'reinstated' | 'revoked' | 'suspended' | 'unlinked'
  role?: 'admin' | 'dev' | 'mod'
}
export default SecurityEventSqlRecord