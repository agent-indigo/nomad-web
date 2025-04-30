import SqlRecord from '@/types/SqlRecord'
export default interface DomainAllowSqlRecord extends SqlRecord {
  domain: string
}