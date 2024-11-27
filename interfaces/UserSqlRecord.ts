import SqlRecord from '@/interfaces/SqlRecord'
interface UserSqlRecord extends SqlRecord {
  email: string
  hashedPassword: string
  roles: [
    'admin' |
    'dev' |
    'mod' |
    'root' |
    'user'
  ]
}
export default UserSqlRecord