import Head from 'next/head'
import Home from '../components/index/home'

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Chat ReactJS</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <Home />
    </div>
  )
}
