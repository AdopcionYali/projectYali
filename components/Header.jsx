import React, { useState } from 'react'



const Header = () => {

    const [rescuer, setRescuer] = useState(true)

    const handleRescuer = () => {
        setRescuer(true)

    }

    const handleAdopter = () => {
        setRescuer(false)

    }

    return (
        <>
            <header className='hero  d-flex justify-content-center align-items-center text-center ' >
                <div className='gradient'>
                    <div className='m-5'>

                        <img src='logo-yali.svg' alt='logo-yali' width="200" className='mb-3' />

                        <h1 className='m-5 header-title display-1'> ¡Llena tu vida de <span style={{ color: '#FB7043' }}>alegría!</span></h1>
                        <p className='m-5 header-p'> Mascotas adoptadas:</p>
                        <button className='header-btn'> 000,000 </button>

                    </div>

                </div>


            </header>

            <main>
                <div className='d-flex justify-content-center m-5 row main-btns'>
                    <button type="button" className="btn-orange btn-lg m-3  col-sm-12 col-lg-3"><img src='pet_paw.svg' className='me-2' width={30}></img>¡Adopta una mascota!</button>

                    <button type="button" className="btn-outline btn-lg m-3 col-sm-12 col-lg-3"><img src='pet_biscuit.svg' className='me-2' width={30}></img>¡Dar en adopción!</button>

                </div>



                <section >
                    <div className='d-flex justify-content-between align-items-end row'>
                        <img src='cat-main.png' alt='cat-main' className='cat-img  col-3  col-lg-2' />
                        <h1 className='section-title col-6 display-3 mb-5'>¿Cómo funciona Yali?</h1>
                        <img src='dog-main.png' alt='dog-main' className='dog-img col-3  col-lg-2' />
                    </div>

                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <button className="nav-link " onClick={handleRescuer} ><img src='biscuit-icon.svg' width={30} className='mx-3'></img>Soy rescatista</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link " onClick={handleAdopter}><img src='paw-icon.svg' width={30} className='mx-3'></img>¡Quiero adoptar!</button>
                        </li>

                    </ul>

                    <div>
                        {rescuer &&
                            <div className='rescuer'></div>

                        }
                        {!rescuer &&
                            <div className='adopter'></div>
                        }


                    </div>

                </section>
            </main>

            <section className='mt-5'>

                <h1 className='section-title text-center '><img src='paws.png' className='me-2' width={50}></img>¡Encuentra tu compañero perfecto!</h1>
                <h3 className='section-subtitle text-center'>Da amor incondicional ¡Adopta una mascota!</h3>


                <div className='d-flex m-5 justify-content-evenly cards'>
                    <div className="card text-bg-dark col-6 col-lg-3  ">
                        <img src="..." className="card-img" height={200} alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">¡Adopta a Micky!</h5>
                            <p className="card-text"><small>Perro macho Alegre</small></p>
                        </div>
                    </div>
                    <div className="card text-bg-dark col-6 mx-1 col-lg-3  ">
                        <img src="..." className="card-img" height={200} alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">¡Adopta a Micky!</h5>
                            <p className="card-text"><small>Perro macho Alegre</small></p>
                        </div>
                    </div>
                    <div className="card text-bg-dark  col-lg-3  ">
                        <img src="..." className="card-img" height={200} alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">¡Adopta a Micky!</h5>
                            <p className="card-text"><small>Perro macho Alegre</small></p>
                        </div>
                    </div>

                </div>

                <h3 className='section-subtitle ms-5'><img src='orange-paw.png'className='me-2' width={20}></img>Encuentra tu compañero</h3>
                
                

                    <div className='cards d-flex m-3 row '>
                        <div className="card col-6 col-lg-3 " >
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Perrito</h5>
                                <p className="card-text">Carinoso </p>
                            </div>
                        </div>
                        <div className="card col-6 col-lg-3 " >
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Perrito</h5>
                                <p className="card-text">Carinoso </p>
                            </div>
                        </div>
                        <div className="card col-6 col-lg-3 " >
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Perrito</h5>
                                <p className="card-text">Carinoso </p>
                            </div>
                        </div>
                        <div className="card col-6 col-lg-3 " >
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Perrito</h5>
                                <p className="card-text">Carinoso </p>
                            </div>
                        </div>
                    </div>


                    
               
            </section>

            <footer>
                <div className='footer mt-5'> Footer</div>
            </footer>


        </>
    )
}

export default Header