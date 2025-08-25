import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai4 from './Bai4.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bai4 />
  </StrictMode>,
)
