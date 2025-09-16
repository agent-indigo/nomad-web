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
  const token: string = localStorage.getItem('token') ?? ''
  useEffect((): void => {(async (): Promise<void> => {
    const response: Response = await fetch(
      '/api/auth/user', {
        headers: {
          Authorization: `Token ${token}`
        }
      }
    )
    if (response.ok) {
      setUser(await response.json())
    } else {
      setErrorOccurred(true)
      setErrorMessage(await response.text())
    }
  })()})
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
  ) : user?.is_staff && token !== '' ? (
    <Outlet/>
  ) : (
    <Navigate
      to='/'
      replace
    />
  )
}
export default StaffRoute