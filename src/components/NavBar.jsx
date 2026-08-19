import React from 'react';
import { useState } from 'react';
import { PiPawPrintFill } from "react-icons/pi";
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex flex-col md:flex-row md:justify-between md:py-6 md:px-8'>
        <div className='flex justify-between px-4 py-4 md:py-0'>
          <Link to="/" className='flex gap-1.5 px-4 items-center'>
            <PiPawPrintFill className='text-orange text-2xl  md:text-2xl lg:text-3xl '/>
            <span className='font-bebas text-2xl md:text-2xl lg:text-3xl'>PetFinders</span>
          </Link>
           {/* Botón hamburguesa - móvil */}
          <button onClick={() => setIsOpen(!isOpen)} className='text-2xl md:hidden'>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        <ul className=' hidden font-montserrat md:flex gap-8 px-12  text-base md:text-lg lg:text-xl'>
            <li><Link to="/" className=' inline-block  font-medium transition-all duration-300 hover:text-orange hover:scale-105  hover:-translate-y-1'>Home</Link></li>
            <li><Link to="/search" className='inline-block  font-medium transition-all duration-300 hover:text-orange hover:scale-105  hover:-translate-y-1'>Adopt</Link></li>
            <li><Link to="/form" className='inline-block  font-medium transition-all duration-300 hover:text-orange hover:scale-105  hover:-translate-y-1 '>Form</Link></li>
        </ul>
        {/* Menú móvil */}
      <div className={`
            overflow-hidden transition-all duration-300 font-montserrat ease-in-out md:hidden mt-2
            ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}        `}>
        <ul className="flex flex-col items-center gap-5 bg-gray-soft py-4">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className='inline-block  font-medium transition-all duration-300 hover:text-orange hover:scale-105  hover:-translate-y-1'>
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" onClick={() => setIsOpen(false)} className='inline-block  font-medium transition-all duration-300 hover:text-orange hover:scale-105  hover:-translate-y-1'>
                Adopt
              </Link>
            </li>
            <li>
              <Link to="/form" onClick={() => setIsOpen(false)} className='inline-block  font-medium transition-all duration-300 hover:text-orange hover:scale-105  hover:-translate-y-1'>
                Form
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default NavBar