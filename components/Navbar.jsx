import Link from 'next/link'
import { useRouter } from 'next/navigation'
import logoImg from '@/public/logo-navbar.svg'

const Navbar = () => {

    const { push } = useRouter()

    return (
        <>
            <nav className='navbar '>
                <div className='container'>
                    <Link className='navbar-brand' href='#'>
                        <img src={ logoImg.src } alt='logo' width='50' />
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