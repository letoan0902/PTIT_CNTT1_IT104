import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai8 from './Bai8'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Bai8 />
    </BrowserRouter>
  </StrictMode>,
)