import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Navbar = () => {

    const { push } = useRouter()

    return (
        <>
            <nav className='navbar '>
                <div className='container'>
                    <Link className='navbar-brand' href='#'>
                        <img src='logo-navbar.svg' alt='logo' width='50' />
                    </Link>
                    <button onClick={()=>push('/login')} className='login-btn btn'>
                    Iniciar Sesión 
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar