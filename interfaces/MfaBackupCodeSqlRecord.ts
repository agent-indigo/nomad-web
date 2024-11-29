import SqlRecord from '@/interfaces/SqlRecord'
interface MfaBackupCodeSqlRecord extends SqlRecord {
  user: string
  code: string
  used: boolean
}
export default MfaBackupCodeSqlRecord