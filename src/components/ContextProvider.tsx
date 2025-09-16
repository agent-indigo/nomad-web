import {
  Context,
  createContext,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  useContext,
  useState
} from 'react'
import ContextProps from '@/types/ContextProps'
import User from '@/types/User'
import ConfigStatus from '@/types/ConfigStatus'
const AppContext: Context<ContextProps> = createContext<ContextProps>({
  setUser: (): void => {},
  token: '',
  setToken: (): void => {},
  configStatus: {
    rootExists: false
  },
  setConfigStatus: (): void => {}
})
const ContextProvider: FunctionComponent<PropsWithChildren> = ({children}): ReactElement => {
  const [
    user,
    setUser
  ] = useState<User | undefined>(undefined)
  const [
    configStatus,
    setConfigStatus
  ] = useState<ConfigStatus>({
    rootExists: false
  })
  const [
    token,
    setToken
  ] = useState<string>('')
  return (
    <AppContext.Provider value={{
      user,
      setUser,
      token,
      setToken,
      configStatus,
      setConfigStatus
    }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGetContext: Function = (): ContextProps => useContext<ContextProps>(AppContext)
export default ContextProvider