import SqlRecord from '@/types/SqlRecord'
export default interface SettingSqlRecord extends SqlRecord {
  var: string
  thing_type?: string
  thing_id?: string
  value?: string
}