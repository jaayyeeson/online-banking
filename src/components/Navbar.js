import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    // const navLinkStyles = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? 'bold' : 'normal',
    //         textDecoration: isActive ? 'none' : 'underline',
    //     }
    // }
    return(
        <nav>
            <div className = "nav-links">
                <NavLink to = '/'>Home</NavLink>
                <NavLink to = '/about'>About</NavLink>
                <NavLink to = '/login'>Login</NavLink>
            </div>
        </nav>
    )
}