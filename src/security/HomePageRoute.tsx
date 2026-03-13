import {
  FunctionComponent,
  ReactElement,
  useEffect
} from 'react'
import {
  Navigate,
  Outlet
} from 'react-router-dom'
import {useGetContext} from '../components/ContextProvider'
import ContextProps from '@/types/ContextProps'
import getCsrfToken from '../utilities/getCsrfToken'
const HomePageRoute: FunctionComponent = (): ReactElement => {
  const {
    user,
    setUser
  }: ContextProps = useGetContext()
  useEffect((): void => {(async (): Promise<void> => {
    const response: Response = await fetch(
      '/api/auth/user', {
        headers: {
          'X-CSRFToken': getCsrfToken()
        },
        credentials: 'include'
      }
    )
    response.ok && setUser(await response.json())
  })()}, [
    setUser
  ])
  return user ? (
    <Outlet/>
  ) : (
    <Navigate
      to='/welcome'
      replace
    />
  )
}
export default HomePageRoute