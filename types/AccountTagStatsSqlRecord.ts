import SqlRecord from '@/types/SqlRecord'
export default interface AccountTagStatsSqlRecord extends SqlRecord {
  tag_id: string
  accounts_count: number
  hidden: boolean
}