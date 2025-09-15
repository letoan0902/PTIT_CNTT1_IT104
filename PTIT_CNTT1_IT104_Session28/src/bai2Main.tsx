import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai2 from './Bai2.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Bai2 />
    </BrowserRouter>
  </StrictMode>,
)
