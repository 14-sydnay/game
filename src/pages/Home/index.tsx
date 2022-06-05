import React from 'react'

import { Hero, Navbar, Footer } from '../../components'

export const Home: React.FC<{}> = () => {
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
    </div>
  )
}
