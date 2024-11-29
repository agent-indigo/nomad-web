'use client'
import {
  Context,
  createContext,
  FunctionComponent,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react'
import State from '@/interfaces/State'
import DestructuredReactNode from '@/interfaces/DestructuredReactNode'
import ServerActionResponse from '@/interfaces/ServerActionResponse'
import getSessionUser from '@/serverActions/getSessionUser'
const GlobalContext: Context<State> = createContext<State>({})
const GlobalContextProvider: FunctionComponent<DestructuredReactNode> = ({children}): ReactElement => {
  const [sessionUserId, setSessionUserId] = useState<string>('')
  useEffect((): void => {
    const getUser: Function = async (): Promise<void> => {
      const {success, sessionUser}: ServerActionResponse = await getSessionUser()
      success && sessionUser && setSessionUserId(sessionUser.id)
    }
    getUser()
  }, [])
  return (
    <GlobalContext.Provider value={{sessionUserId}}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext: Function = (): State => useContext<State>(GlobalContext)
export default GlobalContextProvider