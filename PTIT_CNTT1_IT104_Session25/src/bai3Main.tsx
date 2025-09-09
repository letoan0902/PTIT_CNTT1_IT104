import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai3 from './Bai3'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Bai3 />
    </BrowserRouter>
  </StrictMode>,
)