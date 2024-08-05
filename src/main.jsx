import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import './css/normalize.css'
import './css/index.css'
import './css/background.css'

import App from './App.jsx'
import Homepage from './pages/Homepage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ResumePage from './pages/ResumePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: ,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
