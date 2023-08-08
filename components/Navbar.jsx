import Link from 'next/link'


const Navbar = () => {
    return (
        <>
            <nav className='navbar '>
                <div className='container'>
                    <Link className='navbar-brand' href='#'>
                        <img src='logo-navbar.svg' alt='logo' width='50' />
                    </Link>
                    <button className='login-btn btn'>
                    Iniciar Sesión 
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar