import React, { FC } from 'react'
import NavBar from '../components/navBar/NavBar'
import Home from '../pages/Home'
import Footer from '../components/footer/Footer'

type Props = object

const Layout:FC<Props> = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar />
        <Home/>
        <Footer />
    </div>
  )
}

export default Layout