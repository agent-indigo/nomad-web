import SqlRecord from '@/interfaces/SqlRecord'
export default interface DomainBlockSqlRecord extends SqlRecord {
  domain: string
  reject_media: boolean
  reject_reports: boolean
  severity?: number
  private_comment?: string
  public_comment?: string
}