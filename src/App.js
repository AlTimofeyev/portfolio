import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Devlogs from './pages/Devlogs';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/devlogs',
        element: <Devlogs />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      },
    ],
  },
])

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App


// BrowserRouter doesn't work well with GitHub Pages that have multiple pages.
// HashRouter works better for this scenario, but will append a # (hash) for URLs.
// HashRouter Example Resource Used:
// https://stackoverflow.com/a/71985764/17047816
// https://stackoverflow.com/a/49241468/17047816
// https://stackoverflow.com/a/36623117/17047816