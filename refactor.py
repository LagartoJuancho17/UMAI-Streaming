import re

with open('src/App.jsx', 'r') as f:
    app_content = f.read()

# Extract everything between <nav> and <footer>
match = re.search(r'(<section className="hero">.*?</section>.*?)<footer', app_content, re.DOTALL)
if not match:
    print("Match failed")
    exit()

home_jsx = match.group(1).strip()

# Replace <div className="program-card card-1"> with <Link to="/ciencia-sin-filtro" className="program-card card-1" style={{textDecoration: 'none'}}>
home_jsx = home_jsx.replace('<div className="program-card card-1">', '<Link to="/ciencia-sin-filtro" className="program-card card-1" style={{textDecoration: \'none\'}}>')
home_jsx = home_jsx.replace('</div>\n\n    <div className="program-card card-2">', '</Link>\n\n    <Link to="/umai-te-explica" className="program-card card-2" style={{textDecoration: \'none\'}}>')
home_jsx = home_jsx.replace('</div>\n\n    <div className="program-card card-3">', '</Link>\n\n    <Link to="/en-el-lab" className="program-card card-3" style={{textDecoration: \'none\'}}>')
home_jsx = home_jsx.replace('Docu-Vlog · Estudiantil</span>\n    </div>\n  </div>', 'Docu-Vlog · Estudiantil</span>\n    </Link>\n  </div>')

home_component = """import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      """ + home_jsx + """
    </>
  );
}

export default Home;
"""

with open('src/pages/Home.jsx', 'w') as f:
    f.write(home_component)

# Now rewrite App.jsx to use Router
new_app = """import React, { useEffect, useRef } from 'react';
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
"""

with open('src/App.jsx', 'w') as f:
    f.write(new_app)
