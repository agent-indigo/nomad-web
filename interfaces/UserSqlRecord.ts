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
  theme: 'dark' | 'light' | 'system'
  mfaEnabled: boolean
  mfaBackupCodes: string[]
  suspended: boolean
  securityEvents: string[]
}
export default UserSqlRecord