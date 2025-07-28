import {
  FunctionComponent,
  ReactElement
} from 'react'
import {
  BrowserRouter,
  Routes
} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import {Provider} from 'react-redux'
import store from './redux/store'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
const App: FunctionComponent = (): ReactElement => (
  <Provider store={store}>
    <BrowserRouter>
      <main>
        <Routes>

        </Routes>
      </main>
      <ToastContainer/>
    </BrowserRouter>
  </Provider>
)
export default App