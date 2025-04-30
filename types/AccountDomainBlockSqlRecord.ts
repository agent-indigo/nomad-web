import SqlRecord from '@/types/SqlRecord'
export default interface AccountDomainBlockSqlRecord extends SqlRecord {
  account_id?: string
  domain?: string
}