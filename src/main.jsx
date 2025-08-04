import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from "./components/ThemeProvider"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Header from './components/Header.jsx'
import HomePage from "./components/HomePage.jsx"
import LoginPage from "./components/LoginPage.jsx"
import Courses from './components/Courses.jsx'
import DevopsLab from './components/DevopsLab.jsx'
import PlacementStories from "./components/PlacementStories.jsx"
import Companies from "./components/Companies.jsx"

const AppLayout = ()=>{
  return(
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index:true,
        element: <HomePage />
      },
      {
        path: 'batch12',
        element: <App />
      },
      {
        path: 'login',
        element:<LoginPage />
      },
      {
        path:'/courses',
        element:<Courses />
      },
      {
        path:'/devops-lab',
        element:<DevopsLab />
      },
      {
        path:'/placement-stories',
        element:<PlacementStories />
      },
      {
        path:'companies',
        element:<Companies />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <RouterProvider router={appRouter} />
  </ThemeProvider>
    
)
