import SqlRecord from '@/interfaces/SqlRecord'
interface UserSqlRecord extends SqlRecord {
  email: string
  hashedPassword: string
  roles: [
    'admin' |
    'dev' |
    'mod' |
    'root' |
    'user'
  ]
  actors: string[]
  prefs: string
  mfaEnabled: boolean
  hashedMfaSecret?: string
  hashedMfaBackups: string[]
  suspended: boolean
  securityEvents: string[]
}
export default UserSqlRecord