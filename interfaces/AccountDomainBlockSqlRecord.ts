import SqlRecord from '@/interfaces/SqlRecord'
export default interface AccountDomainBlockSqlREcord extends SqlRecord {
  account_id?: string
  domain?: string
}