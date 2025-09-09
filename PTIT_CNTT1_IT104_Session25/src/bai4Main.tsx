import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai4 from './Bai4'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Bai4 />
    </BrowserRouter>
  </StrictMode>,
)