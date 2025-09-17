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
const SuperuserRoute: FunctionComponent = (): ReactElement => {
  const {
    user,
    setUser
  }: ContextProps = useGetContext()
  const [
    errorOccured,
    setErrorOccured
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
      setErrorOccured(true)
      setErrorMessage(await response.text())
    }
  })()}, [
    setUser,
    token
  ])
  !user?.is_superuser && toast.error('You are not logged in as the superuser.')
  return errorOccured ? (
    <section>
      <h1>
        User Authorization Verification Error
      </h1>
      <p>
        {errorMessage}
      </p>
    </section>
  ) : user?.is_superuser && token !== '' ? (
    <Outlet/>
  ) : (
    <Navigate
      to='/'
      replace
    />
  )
}
export default SuperuserRoute