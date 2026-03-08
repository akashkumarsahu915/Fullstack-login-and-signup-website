import './App.css'
import Navbar from './components/ui/Navbar'
// import { Button } from './components/ui/button'
import Login from './pages/Login'
import HeroSection from './pages/student/HeroSection'
import MainLayout from './layout/MainLayout'
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <MainLayout />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ])
  return (
    <main>
      <RouterProvider router={appRouter} />
    </main>
  )

}

export default App
