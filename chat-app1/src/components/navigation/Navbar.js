import React from 'react'
import './navbar.css'

function Navbar({logout}) {
  return (
    <div className='navbar'>
        <span>PersonalGram</span>
        <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Navbar