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
import Error from './pages/NotFound.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
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
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
