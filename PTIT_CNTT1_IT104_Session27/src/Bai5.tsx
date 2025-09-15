import { Route, Routes} from 'react-router-dom'
import './App.css'
import Account from './components/Account'
import Login from './components/Login'
import PrivateRouter from './components/PrivateRouter '

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRouter />}>
        <Route path="/account" element={<Account />} /> 
      </Route>
    </Routes>
  )
}

export default App