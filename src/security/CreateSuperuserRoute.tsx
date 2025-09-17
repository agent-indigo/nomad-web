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
import {useGetContext} from '../components/ContextProvider'
import ContextProps from '@/types/ContextProps'
const CreateSuperuserRoute: FunctionComponent = (): ReactElement => {
  const {
    configStatus,
    setConfigStatus
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
    const response: Response = await fetch('/api/config/status')
    if (response.ok) {
      setConfigStatus(await response.json())
    } else {
      setErrorOccurred(true)
      setErrorMessage(await response.text())
    }
  })()}, [
    setConfigStatus
  ])
  return errorOccurred ? (
    <section>
      <h1>
        Superuser Existence Verification Error
      </h1>
      <p>
        {errorMessage}
      </p>
    </section>
  ) : configStatus.rootExists ? (
    <Navigate
      to='/'
      replace
    />
  ) : (
    <Outlet/>
  )
}
export default CreateSuperuserRoute