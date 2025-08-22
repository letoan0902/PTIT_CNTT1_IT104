import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai8 from './Bai8.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bai8 />
  </StrictMode>,
)
