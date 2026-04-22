import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CienciaSinFiltro from './pages/CienciaSinFiltro';
import UmaiTeExplica from './pages/UmaiTeExplica';
import EnElLab from './pages/EnElLab';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    let mx = 0, my = 0, tx = 0, ty = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (cursor) {
        cursor.style.transform = `translate(${mx - 9}px, ${my - 9}px)`;
      }
    };

    document.addEventListener('mousemove', onMouseMove);

    const animateTrail = () => {
      tx += (mx - tx) * 0.12;
      ty += (my - ty) * 0.12;
      if (trail) {
        trail.style.transform = `translate(${tx - 20}px, ${ty - 20}px)`;
      }
      animationFrameId = requestAnimationFrame(animateTrail);
    };
    animateTrail();

    const observeAndHover = () => {
      const hoverElements = document.querySelectorAll('.program-card, .event-row, .voice-card');
      const onMouseEnter = () => {
        if (cursor) cursor.style.transform += ' scale(2)';
      };
      const onMouseLeave = () => {};

      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });

      const animatedElements = document.querySelectorAll('.program-card, .event-row, .voice-card, .stat-item, .detail-section');
      animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });
      return { observer, hoverElements, onMouseEnter, onMouseLeave };
    };
    
    // We run it with a timeout to allow DOM to render after navigation
    let cleanup = null;
    const to = setTimeout(() => {
        cleanup = observeAndHover();
    }, 100);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (cleanup) {
          cleanup.hoverElements.forEach(el => {
            el.removeEventListener('mouseenter', cleanup.onMouseEnter);
            el.removeEventListener('mouseleave', cleanup.onMouseLeave);
          });
          cleanup.observer.disconnect();
      }
      clearTimeout(to);
    };
  }); // runs on every render to re-bind intersection observers when routes change

  return (
    <Router>
      <ScrollToTop />
      <div className="cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor-trail" id="cursorTrail" ref={trailRef}></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ciencia-sin-filtro" element={<CienciaSinFiltro />} />
        <Route path="/umai-te-explica" element={<UmaiTeExplica />} />
        <Route path="/en-el-lab" element={<EnElLab />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
