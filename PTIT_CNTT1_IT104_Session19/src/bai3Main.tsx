import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai3 from './Bai3.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bai3 />
  </StrictMode>,
)
