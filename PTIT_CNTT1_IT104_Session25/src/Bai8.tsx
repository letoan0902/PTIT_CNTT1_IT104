import { Route, Routes } from 'react-router-dom'
import './App.css'
import ListUser from './components/ListUser'
import UserDetail from './components/UserDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ListUser />} />
      <Route path="/user/:id" element={<UserDetail />} />
      <Route path="*" element={<ListUser />} />
    </Routes>
  )
}

export default App