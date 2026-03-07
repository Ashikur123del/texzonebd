import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom' // react-router-dom হবে
import Footer from './Footer'

const Root = () => {
  return (
    <div>
        <Navber />
        <main className="min-h-screen">
            <Outlet /> 
        </main>
        <Footer />
    </div>
  )
}

export default Root