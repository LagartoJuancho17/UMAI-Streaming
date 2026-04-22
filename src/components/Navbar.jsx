import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        <span className="dot"></span>
        UMAI STREAM
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Programas</Link></li>
        <li><a href="#">Eventos</a></li>
        <li><a href="#">Voces</a></li>
        <li><a href="#">Universidad</a></li>
      </ul>
      <button className="nav-cta">▶ En Vivo</button>
    </nav>
  );
}

export default Navbar;
