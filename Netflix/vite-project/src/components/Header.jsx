import React from 'react'
import './Header.css'

function Header () {
  return (
    <header className='header--view'>
      <img
        width={120}
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
      />
      <nav className='nav-view'>
        <a href='#'>Home</a>
        <a href='#'>TV Shows</a>
        <a href='#'>Movies</a>
        <a href='#'>Latest</a>
        <a href='#'>My List</a>
      </nav>
    </header>
  )
}

export default Header