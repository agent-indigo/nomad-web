import SqlRecord from '@/interfaces/SqlRecord'
export default interface AccountTagStatsSqlRecord extends SqlRecord {
  tag_id: string
  accounts_count: number
  hidden: boolean
}