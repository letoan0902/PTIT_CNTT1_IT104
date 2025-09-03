import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bai1 from './Bai1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bai1 />
  </StrictMode>,
)
