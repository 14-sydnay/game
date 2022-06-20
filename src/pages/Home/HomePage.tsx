import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from 'components/Footer'
import { Hero } from 'components/Hero'
import { Navbar } from 'components/Navbar'

export const HomePage: React.FC<{}> = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center">
      <div className="item w-full">
        <Navbar />
      </div>
      <div className="item w-full flex-auto">
        <Hero />
      </div>
      <div className="item w-full">
        <Footer />
      </div>
      <Outlet />
    </div>
  )
}
