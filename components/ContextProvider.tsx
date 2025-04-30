'use client'
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
import ConextProps from '@/types/ContextProps'
import UserSqlRecord from '@/types/UserSqlRecord'
const AppContext: Context<ConextProps> = createContext<ConextProps>({
  setUser: (): void => {}
})
const ContextProvider: FunctionComponent<PropsWithChildren> = ({children}): ReactElement => {
  const [
    user,
    setUser
  ] = useState<UserSqlRecord | undefined>(undefined)
  useEffect((): void => {(async (): Promise<void> => {
    const response: Response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/api/auth/user`)
    response.ok && setUser(await response.json())
  })()})
  return (
    <AppContext.Provider value={{
      user,
      setUser
    }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGetContext: Function = (): ConextProps => useContext<ConextProps>(AppContext)
export default ContextProvider