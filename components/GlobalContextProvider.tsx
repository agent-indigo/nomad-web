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
import PrefsSqlRecord from '@/interfaces/PrefsSqlRecord'
import getSessionUserPrefs from '@/serverActions/getSessionUserPrefs'
const GlobalContext: Context<State> = createContext<State>({})
const GlobalContextProvider: FunctionComponent<DestructuredReactNode> = ({children}): ReactElement => {
  const [sessionUserPrefs, sestSessionUserPrefs] = useState<PrefsSqlRecord | undefined>(undefined)
  useEffect((): void => {
    const getPrefs: Function = async (): Promise<void> => {
      const {success, sessionUserPrefs}: ServerActionResponse = await getSessionUserPrefs()
      success && sessionUserPrefs && sestSessionUserPrefs(sessionUserPrefs)
    }
    getPrefs()
  }, [])
  return (
    <GlobalContext.Provider value={{sessionUserPrefs}}>
      {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext: Function = (): State => useContext<State>(GlobalContext)
export default GlobalContextProvider