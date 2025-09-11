import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Account from './components/Account'
import PrivateRouter from './components/PrivateRouter '

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRouter />}>
        <Route path="/account" element={<Account />} />
      </Route>
    </Routes>
  )
}

export default App