import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      {/* <!-- Logo --> */}
      <div className="text-2xl font-extrabold text-white cursor-pointer">
        <a href="/">TechSphere</a>
      </div>

      {/* <!-- Navigation Links --> */}
      <nav id='app' className="space-x-6 hidden md:block">
        <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
        <Link href="/blogPost" className="text-gray-300 hover:text-white">Blog</Link>
    
        <Link href="/about"  className="text-gray-300 hover:text-white">About</Link>
        <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
      </nav>

    

      {/* <!-- Mobile Menu (Hamburger) --> */}
      <div className="md:hidden">
        <button id="menu-toggle" className="text-gray-300 focus:outline-none">
          ☰
        </button>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default Header
