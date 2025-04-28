"use client"

import { useState } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <div>
      <button 
        onClick={toggleMenu}
        className="text-black focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 right-0 left-0 bg-white shadow-md z-50">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/" 
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="block py-2 hover:text-gray-600 transition-colors"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/booking" 
                  className="block py-2 bg-black text-white px-4 rounded hover:bg-gray-800 transition-colors"
                  onClick={toggleMenu}
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
