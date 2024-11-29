import SqlRecord from '@/interfaces/SqlRecord'
interface HashedMfaBackupSqlRecord extends SqlRecord {
  user: string
  hash: string
  used: boolean
}
export default HashedMfaBackupSqlRecord