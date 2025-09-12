import {
  Context,
  createContext,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react'
import {toast} from 'react-toastify'
import ContextProps from '@/types/ContextProps'
import User from '@/types/User'
import ConfigStatus from '@/types/ConfigStatus'
const AppContext: Context<ContextProps> = createContext<ContextProps>({
  setUser: (): void => {},
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
  ] = useState<string | undefined>(undefined)
  useEffect((): void => {(async (): Promise<void> => {
    const getConfigStatus: Function = async (): Promise<void> => {
      const response: Response = await fetch('/api/config/status')
      if (response.ok) {
        setConfigStatus(await response.json())
      } else {
        toast.error(await response.text())
      }
    }
    const getUser: Function = async (): Promise<void> => {
      const response: Response = await fetch('/api/auth/user')
      if (response.ok) {
        setUser(await response.json())
      } else {
        setUser(undefined)
      }
    }
    await getConfigStatus()
    configStatus.rootExists && await getUser()
  })()})
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