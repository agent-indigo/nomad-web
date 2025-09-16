import {
  Dispatch,
  SetStateAction
} from 'react'
import User from '@/types/User'
import ConfigStatus from '@/types/ConfigStatus'
export default interface ContextProps {
  user?: User
  setUser: Dispatch<SetStateAction<User | undefined>>
  token: string
  setToken: Dispatch<SetStateAction<string>>
  configStatus: ConfigStatus
  setConfigStatus: Dispatch<SetStateAction<ConfigStatus>>
}