import React, { FC } from 'react'
import NavBar from '../components/navBar/NavBar'
import Home from '../pages/Home'

type Props = {}

const Layout:FC<Props> = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar />
        <Home/>
    </div>
  )
}

export default Layout