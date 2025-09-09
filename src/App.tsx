import {
  FunctionComponent,
  ReactElement
} from 'react'
import {
  BrowserRouter,
  Routes
} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
const App: FunctionComponent = (): ReactElement => (
  <BrowserRouter>
    <main>
      <Routes>

      </Routes>
    </main>
    <ToastContainer/>
  </BrowserRouter>
)
export default App