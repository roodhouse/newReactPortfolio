import React from 'react'
import Navigation from './Navigation/Navigation'
import Logo from './logo/Logo'

const Header = () => {
  return (
    <div className='bg-secondary py-4 sticky-top'>
        <div className='d-flex flex-row justify-content-between'>
            <Logo />
            <Navigation />
        </div>
    </div>
  )
}

export default Header