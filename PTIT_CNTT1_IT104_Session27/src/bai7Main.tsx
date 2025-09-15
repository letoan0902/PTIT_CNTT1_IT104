import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai7 from './Bai7'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Bai7 />
    </BrowserRouter>
  </StrictMode>,
)