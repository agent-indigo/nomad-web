import SqlRecord from '@/types/SqlRecord'
export default interface EmailDomainBlockSqlRecord extends SqlRecord {
  domain: string
}