import {
  Dispatch,
  SetStateAction
} from 'react'
import UserSqlRecord from '@/types/UserSqlRecord'
export default interface ContextProps {
  user?: UserSqlRecord
  setUser: Dispatch<SetStateAction<UserSqlRecord | undefined>>
}