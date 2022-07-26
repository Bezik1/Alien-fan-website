import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () =>{
    return (
        <div className='nav' id='nav'>
            <div className='nav-links'>
                <Link  to='/home' className='nav-link' > Home </Link>
                <Link  to='/' className='nav-link' > Aliens </Link>
            </div>
        </div>
    )
}

export default Navbar