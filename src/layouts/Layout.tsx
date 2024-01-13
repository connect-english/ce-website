import { FC } from 'react'
import NavBar from '../components/navBar/NavBar'
// import Home from '../pages/Home'
import Footer from '../components/footer/Footer'
import { Outlet, ScrollRestoration  } from 'react-router-dom'

type Props = object

const Layout:FC<Props> = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar />
          <Outlet />
        <Footer />
        <ScrollRestoration  />
    </div>
  )
}

export default Layout