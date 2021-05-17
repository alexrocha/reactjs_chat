import Head from 'next/head'
import ChatMessages from '../components/chat/chatMessages'


export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Chat ReactJS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <ChatMessages/>
      </main>

    </div>
  )
}
