import SqlRecord from '@/interfaces/SqlRecord'
interface PrefsSqlRecord extends SqlRecord {
  user: string
  theme: 'dark' | 'light' | 'system'
}
export default PrefsSqlRecord