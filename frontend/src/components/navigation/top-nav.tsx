'use client'
import React from 'react'
import { useState } from 'react'
import PitchforkLogo from '../logo'
import { NavItems } from './nav-items.tsx'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="md:flex-auto items-center flex-shrink-0 text-white mr-6">
          <PitchforkLogo />
        </div>
        <NavItems />
        </nav>
    </>
  )
}

export { Navbar }