'use client'
import {
  Context,
  createContext,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  useContext
} from 'react'
import ConextProps from '@/types/ContextProps'
const AppContext: Context<ConextProps> = createContext<ConextProps>({})
const ContextProvider: FunctionComponent<PropsWithChildren> = ({children}): ReactElement => {
  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}
export const useGetContext: Function = (): ConextProps => useContext<ConextProps>(AppContext)
export default ContextProvider