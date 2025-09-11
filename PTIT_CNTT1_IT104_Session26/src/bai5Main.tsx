import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai5 from './Bai5'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Bai5 />
    </BrowserRouter>
  </StrictMode>,
)