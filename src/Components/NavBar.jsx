import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar bg-success'>
    <nav className='container-fluid'>
      <Link to="/" style={{textDecoration:"none"}}>
      <h3 id='Crypto-logo' className='text-light'>Crypto-App</h3>  
      </Link>
    </nav>
  </div>
  )
}

export default NavBar
