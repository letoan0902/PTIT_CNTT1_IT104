import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai2 from './Bai2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bai2 />
  </StrictMode>,
)
