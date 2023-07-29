import Head from 'next/head'
<<<<<<< HEAD
import Header from '@/components/Header'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '@/components/Navbar'

=======
import styles from '@/styles/Home.module.scss'
>>>>>>> main

export default function Home() {
  return (
    <>
      <Head>
        <title>Yali</title>
<<<<<<< HEAD
        <meta name="description" content="Adopción de mascotas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        
        
=======
        <meta name='description' content='Adopción de mascotas' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
>>>>>>> main
      </Head>
      <Navbar />
      <Header />
    </>
  )
}