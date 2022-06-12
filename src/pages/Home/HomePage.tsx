import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from 'Components/Footer'
import { Hero } from 'Components/Hero'
import { Navbar } from 'Components/Navbar'

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
