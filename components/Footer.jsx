import Link from 'next/link'
import styles from '@/styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={`mt-4 footer mb-4  ${styles.footer}`}>

      <div className=' ms-5 d-flex '>
        <p className='ms-5'>Síguenos</p>
        <img src='twitter-icon.svg' height={20} className='mx-2'></img>
        <img src='facebook-icon.svg' height={20} className='mx-2'></img>
        <img src='insta-icon.svg' height={20} className='mx-2'></img>
      </div>


      <hr className={styles.hr}></hr>


      <div className='justify-content-between px-5  d-flex'>
        <img className={`${styles.logo} ms-5`} src='logo-yali.svg' alt='logo-yali' width={100}></img>
       
        <ul className={`${styles.list}   me-5 d-flex`}>
          <li><Link className={`${styles.a} a`} href='#'>Inicio</Link></li>
          <li><Link className={`${styles.a} mx-4  a`} href='#'>Adopta</Link></li>
          <li><Link className={`${styles.a} a`} href='/signup?role=rescatist'>Dar en adopción</Link></li>
        </ul>
        
        
      </div>


      <hr className={styles.hr}></hr>

        <div className=' d-flex justify-content-around'>

        <small className='cols-sm-12 col-6 '>Copyright © Yali 2023. Todos los derechos reservados</small>
        <small><Link className={`${styles.a} a me-3 col-sm-12 col-lg-3 `} href='#'>Aviso de Privacidad</Link></small>
        <small><Link className={`${styles.a} a col-sm-12 col-lg-3`} href='#'> Términos y Condiciones</Link></small>

        </div>
      

    </footer>
  )
}

export default Footer