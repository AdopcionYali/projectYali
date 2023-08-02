import { useState } from 'react'
import Slider from './Slider'
import styles from '@/styles/Landing.module.scss'

const Landing = () => {

    const [rescuer, setRescuer] = useState(true)

    const handleRescuer = () => {
        setRescuer(true)

    }

    const handleAdopter = () => {
        setRescuer(false)

    }

    return (
        <>
            <header className={`hero  d-flex justify-content-center align-items-center text-center ${styles.hero}`}  >
                <div className={`gradient ${styles.gradient}`}>
                    <div className='m-5'>

                        <img src='logo-yali.svg' alt='logo-yali' width='200' className='mb-3' />

                        <h1 className={`m-5 headerTitle display-1 ${styles.headerTitle}`}> ¡Llena tu vida de <span style={{ color: '#FB7043' }}>alegría!</span></h1>
                        <p className={`m-5 headerp ${styles.headerp}`}> Mascotas adoptadas:</p>
                        <button className={`headerBtn ${styles.headerBtn}`}> 000,000 </button>

                    </div>

                </div>


            </header>

            <main className={`bg-white-1 main ${styles.main}`}>
                <div className='d-flex justify-content-center m-5 row main-btns '>
                    <button type='button' className={`btnOrange btn-lg m-3  ${styles.btn} col-sm-12 col-lg-3 ${styles.btnOrange}`}><img src='pet_paw.svg' alt='pet-paw' className='me-2' width={30}></img>¡Adopta una mascota!</button>

                    <button type='button' className={`btnOutline btn-lg m-3  ${styles.btn} col-sm-12 col-lg-3 ${styles.btnOutline}`}><img src='pet_biscuit.svg' alt='pet-biscuit' className='me-2' width={30}></img>¡Dar en adopción!</button>

                </div>



                <section >
                    <div className='d-flex justify-content-between align-items-end row'>
                        <img src='cat-main.png' alt='cat-main' className='cat-img  col-3  col-lg-2' />
                        <h1 className={`sectionTitle col-6 display-3 mb-5 ${styles.sectionTitle}`}>¿Cómo funciona Yali?</h1>
                        <img src='dog-main.png' alt='dog-main' className='dog-img col-3  col-lg-2' />
                    </div>

                    <ul className={`nav nav-underline ${styles.navUnderline}`} >
                        <li className='nav-item'>
                            <button className={`nav-link ${styles.navLink} `} onClick={handleRescuer} ><img src='biscuit-icon.svg' alt='biscuit-icon' width={30} className='mx-3'></img>Soy rescatista</button>
                        </li>
                        <li className='nav-item'>
                            <button className={`nav-link ${styles.navLink} `} onClick={handleAdopter}><img src='paw-icon.svg' alt='paw-icon' width={30} className='mx-3'></img>¡Quiero adoptar!</button>
                        </li>

                    </ul>

                    <div>
                        {rescuer &&
                            <div className={`rescuer ${styles.rescuer}`}></div>

                        }
                        {!rescuer &&
                            <div className={`adopter ${styles.adopter}`}></div>
                        }


                    </div>

                </section>


                <section className='mt-5 bg-white-1 '>

                    <h1 className={`sectionTitle text-center display-5 ${styles.sectionTitle}`} ><img src='paws.png' className='me-2' width={50}></img>¡Encuentra tu compañero perfecto!</h1>
                    <h3 className={`sectionSubtitle text-center  ${styles.sectionSubitle}`}>Da amor incondicional ¡Adopta una mascota!</h3>


                    <div className='d-flex m-5 justify-content-evenly cards'>
                        <div className='card text-bg-dark col-6 col-lg-3  '>
                            <img src='...' className='card-img' height={200} alt='...' />
                            <div className='card-img-overlay'>
                                <h5 className='card-title'>¡Adopta a Micky!</h5>
                                <p className='card-text'><small>Perro macho Alegre</small></p>
                            </div>
                        </div>
                        <div className='card text-bg-dark col-6 mx-1 col-lg-3  '>
                            <img src='...' className='card-img' height={200} alt='...' />
                            <div className='card-img-overlay'>
                                <h5 className='card-title'>¡Adopta a Micky!</h5>
                                <p className='card-text'><small>Perro macho Alegre</small></p>
                            </div>
                        </div>
                        <div className='card text-bg-dark  col-lg-3  '>
                            <img src='...' className='card-img' height={200} alt='...' />
                            <div className='card-img-overlay'>
                                <h5 className='card-title'>¡Adopta a Micky!</h5>
                                <p className='card-text'><small>Perro macho Alegre</small></p>
                            </div>
                        </div>

                    </div>

                    <h3 className='section-subtitle ms-5'><img src='orange-paw.png' className='me-2' width={20}></img>Encuentra tu compañero</h3>



                    <Slider />

                </section>

            

            </main>

        </>
    )
}

export default Landing