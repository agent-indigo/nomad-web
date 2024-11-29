import SqlRecord from '@/interfaces/SqlRecord'
interface SecurityEventSqlRecord extends SqlRecord {
  user: string
  actor?: string
  event: 'email changed' | 'linked' | 'mfa disabled' | 'mfa enabled' | 'name changed' | 'password changed' | 'reinstated' | 'suspended' | 'unlinked'
}
export default SecurityEventSqlRecord