import SqlRecord from '@/interfaces/SqlRecord'
export default interface AccountDomainBlockSqlRecord extends SqlRecord {
  account_id?: string
  domain?: string
}