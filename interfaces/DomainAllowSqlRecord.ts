import SqlRecord from '@/interfaces/SqlRecord'
export default interface DomainAllowSqlRecord extends SqlRecord {
  domain: string
}