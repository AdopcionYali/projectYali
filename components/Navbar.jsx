import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar ">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src='logo-navbar.svg'  width='50' />
                    </a>
                    <button className='login-btn btn'>
                    Iniciar Sesión
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar