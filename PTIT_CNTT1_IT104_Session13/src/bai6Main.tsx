import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai6 from './Bai6.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bai6 />
  </StrictMode>,
)
