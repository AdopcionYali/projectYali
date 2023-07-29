import Head from 'next/head'
import Header from '@/components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Yali</title>
        <meta name="description" content="Adopción de mascotas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        
        
      </Head>
      <Navbar />
      <Header />
    </>
  )
}
