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
  enabled: boolean
  passwordChangedOn?: string
  mfaEnabledOn?: string
  mfaDisabledOn?: string
}
export default UserSqlRecord