import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <div className="footer-logo">
          <span className="pink">UMAI</span><br />
          <span className="yellow">STREAM</span>
        </div>
        <p className="footer-tagline">Canal universitario de streaming de la Universidad Maimónides. Producido por la Escuela de Comunicación y Diseño Multimedial.</p>
        <span className="live-badge">EN VIVO 2026</span>
      </div>

      <div>
        <div className="footer-heading">Programas</div>
        <ul className="footer-links">
          <li><a href="#">Ciencia Sin Filtro</a></li>
          <li><a href="#">UMAI Te Explica</a></li>
          <li><a href="#">En el Lab</a></li>
          <li><a href="#">Panel UMAI</a></li>
          <li><a href="#">Historias de la Guardia</a></li>
        </ul>
      </div>

      <div>
        <div className="footer-heading">Universidad</div>
        <ul className="footer-links">
          <li><a href="#">Oferta Académica</a></li>
          <li><a href="#">Eventos</a></li>
          <li><a href="#">Investigación</a></li>
          <li><a href="#">ActivaMente</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Universidad Maimónides — TP02 Diseño Aplicado</p>
        <p>Mia Carini Rojo · Lola Mazza Oliver · Tobias Arraiza</p>
      </div>
    </footer>
  );
}

export default Footer;
