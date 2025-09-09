import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai6 from './Bai6'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Bai6 />
    </BrowserRouter>
  </StrictMode>,
)