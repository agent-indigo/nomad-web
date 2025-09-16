import {
  FunctionComponent,
  ReactElement
} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import ContextProvider from './components/ContextProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import CreateSuperuserRoute from './security/CreateSuperuserRoute'
import ProductionRoute from './security/ProductionRoute'
import HomePageRoute from './security/HomePageRoute'
import WelcomePageRoute from './security/WelcomePageRoute'
import LoginRoute from './security/LoginRoute'
import PrivateRoute from './security/PrivateRoute'
import StaffRoute from './security/StaffRoute'
import SuperuserRoute from './security/SuperuserRoute'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
const App: FunctionComponent = (): ReactElement => (
  <ContextProvider>
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
          <Route
            path='/'
            element={<ProductionRoute/>}
          >
            <Route
              path=''
              element={<HomePageRoute/>}
            >

            </Route>
            <Route
              path=''
              element={<WelcomePageRoute/>}
            >

            </Route>
            <Route
              path=''
              element={<LoginRoute/>}
            >

            </Route>
            <Route
              path=''
              element={<PrivateRoute/>}
            >
              <Route
                path='staff/'
                element={<StaffRoute/>}
              >
                <Route
                  path='superuser/'
                  element={<SuperuserRoute/>}
                >

                </Route>
              </Route>
            </Route>
          </Route>
          <Route
            path='setup/'
            element={<Outlet/>}
          >
            <Route
              path='createSuperUser/'
              element={<CreateSuperuserRoute/>}
            >
              
            </Route>
          </Route>
        </Routes>
      </main>
      <Footer/>
      <ToastContainer/>
    </BrowserRouter>
  </ContextProvider>
)
export default App