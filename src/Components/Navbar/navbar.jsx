import './navbar.css'

const Navbar = () => {
    
    return (
        <div className='nav'> 
            <div className="nav-logo">Zotography</div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>ZoTography</li>
                <li>Projects</li>
                <li>Experience</li>
                <li className='nav-contact'>Contact</li>
            </ul>

        </div>
    )
}

export default Navbar