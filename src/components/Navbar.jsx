import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-4 md:px-12 md:py-5 flex items-center justify-between bg-[var(--black)] fixed w-full z-[100] border-b-[3px] border-[var(--hot-pink)]">
      <Link to="/" className="nav-logo relative z-[110] flex items-center gap-2" style={{ textDecoration: 'none' }}>
        <span className="dot block w-3 h-3 rounded-full bg-[var(--hot-pink)]"></span>
        UMAI STREAM
      </Link>
      
      {/* Hamburger Icon */}
      <div className="md:hidden relative z-[110] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <svg className="w-8 h-8 text-[var(--white)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </div>

      {/* Nav Links */}
      <div className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-[var(--black)] md:bg-transparent items-center justify-center md:justify-end gap-8 md:gap-9 pt-20 md:pt-0 z-[105]`}>
        <ul className="nav-links flex flex-col md:flex-row items-center gap-8 md:gap-9 m-0 p-0 text-xl md:text-[0.75rem]">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Programas</Link></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Eventos</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Voces</a></li>
          <li><a href="#" onClick={() => setIsOpen(false)}>Universidad</a></li>
        </ul>
        <button className="nav-cta mt-4 md:mt-0 text-lg md:text-base px-8 py-3 md:px-6 md:py-2">▶ En Vivo</button>
      </div>
    </nav>
  );
}

export default Navbar;
