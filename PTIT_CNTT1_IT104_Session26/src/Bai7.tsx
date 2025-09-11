import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'

import Team from './components/Team'
import Teams from './components/Teams'
import TeamsIndex from './components/TeamsIndex'

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Navigate to="/teams" replace />} />
        <Route path="/teams" element={<Teams />}> 
          <Route index element={<TeamsIndex />} />      
          <Route path=":teamId" element={<Team />} />   
        </Route>
      </Route>
    </Routes>
  )
}

export default App