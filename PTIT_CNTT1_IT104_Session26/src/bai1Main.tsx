import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai1 from './Bai1'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Bai1 />
    </BrowserRouter>
  </StrictMode>,
)
