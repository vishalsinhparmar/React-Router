import React from 'react'
import { Link} from 'react-router-dom'

export default function NavbarApp() {
  return (
    <>
    <nav className='navbar navbar-expand-lg container-fluid bg-light d-flex justify-content-center p-3 '>
      <ul className='navbar-nav'>
      <li className='navbar-item mx-5'><Link to="/" className=''>LOGO</Link></li>
        <li className='navbar-item mx-3'><Link to="/home">home</Link></li>
        <li className='navbar-item mx-3'><Link to="/customer">Costomer</Link></li>
        <li className='navbar-item mx-3'><Link to="/services">Services</Link></li>
        <li className='navbar-item mx-3'><Link to="/team">Team</Link></li>
        <li className='navbar-item mx-3'><Link to="/contact">Contact</Link></li>
      
      </ul>
    
    </nav>
    
      </>
  )
}
