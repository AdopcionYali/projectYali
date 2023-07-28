import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <Link href="/login">Iniciar sesión</Link>
    </div>
  );
};

export default HomePage;

