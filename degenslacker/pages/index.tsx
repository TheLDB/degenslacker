import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Feeds from '../components/Home/Feeds'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  const [connected, setConnected] = useState(true);
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Degenslacker</title>
      </Head>
      <div className="w-full h-24 absolute top-0 right-0 left-0">
        <Navbar connected={connected} env={"landing"} />
      </div>
      <div className="w-full h-full bg-gradient-to-br from-site-orange via-site-purple to-site-blue flex justify-center items-center">
        {connected ? <Feeds token="aaaa" />: <h1>asaaaa</h1>}
      </div>
    </div>
  )
}

export default Home
