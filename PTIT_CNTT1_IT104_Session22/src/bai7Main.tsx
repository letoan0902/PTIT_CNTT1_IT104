import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai7 from './Bai7.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bai7 />
  </StrictMode>,
)
