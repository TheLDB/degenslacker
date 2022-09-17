import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  const [connected, setConnected] = useState(false);
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-24 absolute top-0 right-0 left-0">
        <Navbar connected={connected} />
      </div>
      <div className="w-full h-full bg-gradient-to-br from-site-orange via-site-purple to-site-blue flex justify-center items-center">

      </div>
    </div>
  )
}

export default Home
