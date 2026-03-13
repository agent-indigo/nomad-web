import {
  FunctionComponent,
  ReactElement,
  useEffect,
  useState
} from 'react'
import {
  Navigate,
  Outlet
} from 'react-router-dom'
import {toast} from 'react-toastify'
import {useGetContext} from '../components/ContextProvider'
import ContextProps from '@/types/ContextProps'
import getCsrfToken from '../utilities/getCsrfToken'
const StaffRoute: FunctionComponent = (): ReactElement => {
  const {
    user,
    setUser
  }: ContextProps = useGetContext()
  const [
    errorOccurred,
    setErrorOccurred
  ] = useState<boolean>(false)
  const [
    errorMessage,
    setErrorMessage
  ] = useState<string>('')
  useEffect((): void => {(async (): Promise<void> => {
    const response: Response = await fetch(
      '/api/auth/user', {
        headers: {
          'X-CSRFToken': getCsrfToken()
        },
        credentials: 'include'
      }
    )
    if (response.ok) {
      setUser(await response.json())
    } else {
      setErrorOccurred(true)
      setErrorMessage(await response.text())
    }
  })()}, [
    setUser
  ])
  !user?.is_staff && toast.error('You are not logged in as an administrator.')
  return errorOccurred ? (
    <section>
      <h1>
        User Authorization Verification Error
      </h1>
      <p>
        {errorMessage}
      </p>
    </section>
  ) : user?.is_staff ? (
    <Outlet/>
  ) : (
    <Navigate
      to='/'
      replace
    />
  )
}
export default StaffRoute