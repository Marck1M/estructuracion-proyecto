import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from './pages/Index'
import Header from './components/Header'
import Aside from './components/Aside'
import Footer from './components/Footer'
import './index.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aside/>
    <Header/>
    <Index/>
    <Footer/>
  </StrictMode>,
)
