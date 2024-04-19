import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react"
import './navbar.css'

export default function Navbar() {
    const [colour, setcolour] = useState(false)
    const changeColour = () =>{
        if (window.scrollY >=300){
            setcolour(true)
        }else{
            setcolour(false)
        }
    }
    window.addEventListener('scroll', changeColour)
    return (
        <nav className={colour ? 'nav nav-bg': 'nav'}>
            <Link to="/" className="site-title">
                Perfumarie
            </Link>
            <ul>
                <Link to='/Auth'><button className="nav-btn">Login</button></Link>
                <CustomLink to="/Cart">Basket <div className={colour ? 'card-count-new': 'card-count card-count-new'}>0</div></CustomLink>
                <CustomLink to="/profile">Profile</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }: any) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}