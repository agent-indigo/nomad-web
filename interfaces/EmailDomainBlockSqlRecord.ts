import SqlRecord from '@/interfaces/SqlRecord'
export default interface EmailDomainBlockSqlRecord extends SqlRecord {
  domain: string
}