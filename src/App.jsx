import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { slideFunction } from './utils/functions.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './css/App.css'

function App() {

  const location = useLocation();

  useEffect(() => {
      slideFunction();
  }, [location])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
