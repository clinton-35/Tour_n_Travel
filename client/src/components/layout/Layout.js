import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <div className='layout'>
        <Navbar/>
           {/* Components */}
           <Outlet/>
           
        <Footer/>
    </div>
  )
}

export default Layout