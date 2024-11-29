import UserSqlRecord from '@/interfaces/UserSqlRecord'
import PrefsSqlRecord from '@/interfaces/PrefsSqlRecord'
interface ServerActionResponse {
  error?: string
  message?: string
  success: boolean
  sessionUser?: UserSqlRecord
  sessionUserPrefs?: PrefsSqlRecord
}
export default ServerActionResponse