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
const ProductionRoute: FunctionComponent = (): ReactElement => {
  const {
    configStatus,
    setConfigStatus
  }: ContextProps = useGetContext()
  const [
    errorOccured,
    setErrorOccured
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
      setErrorOccured(true)
      setErrorMessage(await response.text())
    }
  })()}, [
    setConfigStatus
  ])
  return errorOccured ? (
    <section>
      <h1>
        Configuration Status Verification Error
      </h1>
      <p>
        {errorMessage}
      </p>
    </section>
  ) : configStatus.rootExists ? (
    <Outlet/>
  ) : (
    <Navigate
      to='/config/createSuperuser'
      replace
    />
  )
}
export default ProductionRoute