import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero">
  <div className="hero-bg-pattern"></div>

  {/* Star decorations */}
  <svg className="star" style={{top: '120px', left: '60px', color: 'var(--yellow)', opacity: 0.15}} viewBox="0 0 60 60"><polygon points="30,0 36,22 60,22 41,36 47,58 30,44 13,58 19,36 0,22 24,22" fill="currentColor"/></svg>
  <svg className="star" style={{bottom: '80px', left: '400px', color: 'var(--hot-pink)', opacity: 0.12, width: '40px', height: '40px', transform: 'rotate(15deg)'}} viewBox="0 0 60 60"><polygon points="30,0 36,22 60,22 41,36 47,58 30,44 13,58 19,36 0,22 24,22" fill="currentColor"/></svg>

  <div className="hero-left">
    <div className="hero-tag">🔴 Transmisión en Vivo — UMAI 2026</div>

    <h1 className="hero-title">
      <span className="line-white">CANAL</span><br />
      <span className="line-pink">UMAI</span><br />
      <span className="line-yellow">STREAM</span>
    </h1>

    <p className="hero-desc">
      Ciencia, cultura y comunidad universitaria en formato streaming. Producido por estudiantes de Tecnología Multimedial de la Universidad Maimónides.
    </p>

    <div className="hero-buttons">
      <button className="btn-primary">▶ Ver Programas</button>
      <button className="btn-secondary">Conocé la U</button>
    </div>
  </div>

  <div className="hero-right">
    <div className="hero-right-bg"></div>
    <div className="hero-card">
      <div className="hero-card-label">🎙 En el aire ahora</div>
      <div className="hero-card-title">LO QUE<br />VIENE<span>.</span></div>
      <div className="hero-card-shows">
        <div className="hero-card-show">
          <div className="show-dot"></div>
          Ciencia sin Filtro — Debate
        </div>
        <div className="hero-card-show">
          <div className="show-dot"></div>
          UMAI Te Explica — Guía
        </div>
        <div className="hero-card-show">
          <div className="show-dot"></div>
          En el Lab — Docu-Vlog
        </div>
        <div className="hero-card-show">
          <div className="show-dot"></div>
          Historias de la Guardia
        </div>
      </div>
    </div>

    {/* Floating live badge */}
    <div className="live-badge" style={{position: 'absolute', top: '140px', right: '60px', zIndex: 3}}>LIVE</div>

    {/* Decorative star top right */}
    <svg style={{position: 'absolute', top: '100px', right: '20px', width: '80px', height: '80px', color: 'var(--yellow)', opacity: 0.9, animation: 'float 3s ease-in-out infinite'}} viewBox="0 0 60 60"><polygon points="30,0 36,22 60,22 41,36 47,58 30,44 13,58 19,36 0,22 24,22" fill="currentColor"/></svg>
  </div>
</section>

{/* TICKER */}
<div className="ticker">
  <div className="ticker-track">
    <span className="ticker-item">CIENCIA SIN FILTRO</span>
    <span className="ticker-item">UMAI TE EXPLICA</span>
    <span className="ticker-item">EN EL LAB</span>
    <span className="ticker-item">HISTORIAS DE LA GUARDIA</span>
    <span className="ticker-item">PANEL UMAI</span>
    <span className="ticker-item">DETRÁS DE CÁMARA</span>
    <span className="ticker-item">CIENCIA SIN FILTRO</span>
    <span className="ticker-item">UMAI TE EXPLICA</span>
    <span className="ticker-item">EN EL LAB</span>
    <span className="ticker-item">HISTORIAS DE LA GUARDIA</span>
    <span className="ticker-item">PANEL UMAI</span>
    <span className="ticker-item">DETRÁS DE CÁMARA</span>
  </div>
</div>

{/* PROGRAMS */}
<section className="section-programs">
  <div className="section-header">
    <div>
      <div className="section-eyebrow">// Formatos del Canal</div>
      <h2 className="section-title">NUESTROS<br /><span className="highlight">PROGRAMAS</span></h2>
    </div>
    <span className="live-badge">3 Formatos</span>
  </div>

  <div className="programs-grid">
    <Link to="/ciencia-sin-filtro" className="program-card card-1" style={{textDecoration: 'none'}}>
      <div className="card-bg-fill"></div>
      <div className="program-number">01</div>
      <span className="program-emoji">🔬</span>
      <h3 className="program-name">Ciencia Sin Filtro</h3>
      <p className="program-desc">Investigadores y referentes debaten noticias de actualidad o explican la ciencia aplicada a problemas reales. IA, ambiente, neurociencias.</p>
      <span className="program-tag">Debate · Divulgación</span>
    </Link>

    <Link to="/umai-te-explica" className="program-card card-2" style={{textDecoration: 'none'}}>
      <div className="card-bg-fill"></div>
      <div className="program-number">02</div>
      <span className="program-emoji">🎓</span>
      <h3 className="program-name">UMAI Te Explica</h3>
      <p className="program-desc">Bloque semanal de servicio y vida universitaria. Trámites, becas, salud mental, anécdotas del campus. Tu guía dentro de la U.</p>
      <span className="program-tag">Servicio · Comunidad</span>
    </Link>

    <Link to="/en-el-lab" className="program-card card-3" style={{textDecoration: 'none'}}>
      <div className="card-bg-fill"></div>
      <div className="program-number">03</div>
      <span className="program-emoji">🎬</span>
      <h3 className="program-name">En el Lab</h3>
      <p className="program-desc">Docu-vlog estudiantil. Recorridos por laboratorios, investigaciones en curso, el proceso creativo de Diseño Multimedial.</p>
      <span className="program-tag">Docu-Vlog · Estudiantil</span>
    </Link>
  </div>
</section>

<div className="divider"></div>

{/* STATS */}
<div className="stats-bar">
  <div className="stat-item">
    <div className="stat-number">28</div>
    <div className="stat-label">Carreras de Grado</div>
  </div>
  <div className="stat-item">
    <div className="stat-number">11K</div>
    <div className="stat-label">Estudiantes Matriculados</div>
  </div>
  <div className="stat-item">
    <div className="stat-number">60+</div>
    <div className="stat-label">Investigadores Activos</div>
  </div>
  <div className="stat-item">
    <div className="stat-number">6</div>
    <div className="stat-label">Centros de Investigación</div>
  </div>
</div>

{/* EVENTS */}
<section className="section-events">
  <div className="section-header">
    <div>
      <div className="section-eyebrow">// Agenda 2026</div>
      <h2 className="section-title">PRÓXIMOS<br /><span className="highlight">EVENTOS</span></h2>
    </div>
  </div>

  <div className="events-list">
    <div className="event-row">
      <div className="event-date">ABR<span>2026</span></div>
      <div>
        <div className="event-title">Lengua de Señas para Personal de Salud</div>
        <div className="event-type">Curso · Comunicación Accesible</div>
      </div>
      <span className="event-badge badge-green">Abierto</span>
      <span className="event-arrow">→</span>
    </div>

    <div className="event-row">
      <div className="event-date">ABR<span>2026</span></div>
      <div>
        <div className="event-title">Gestión de RRHH y Liderazgo en Salud</div>
        <div className="event-type">Curso · Organizaciones Sanitarias</div>
      </div>
      <span className="event-badge badge-yellow">Próximo</span>
      <span className="event-arrow">→</span>
    </div>

    <div className="event-row">
      <div className="event-date">ABR<span>2026</span></div>
      <div>
        <div className="event-title">Charla Introductoria de ELA</div>
        <div className="event-type">Charla · Salud · Pacientes y Familiares</div>
      </div>
      <span className="event-badge badge-pink">En Vivo</span>
      <span className="event-arrow">→</span>
    </div>

    <div className="event-row">
      <div className="event-date">ABR<span>2026</span></div>
      <div>
        <div className="event-title">Jornada SAPREF — Preservación de la Fertilidad</div>
        <div className="event-type">Jornada · Medicina Reproductiva</div>
      </div>
      <span className="event-badge badge-green">Abierto</span>
      <span className="event-arrow">→</span>
    </div>

    <div className="event-row">
      <div className="event-date">MAY<span>2026</span></div>
      <div>
        <div className="event-title">Ecografía Abdominal en Pequeños Animales</div>
        <div className="event-type">Curso Superior · Veterinaria</div>
      </div>
      <span className="event-badge badge-yellow">Próximo</span>
      <span className="event-arrow">→</span>
    </div>
  </div>
</section>

{/* MARQUEE */}
<div className="marquee-section">
  <div className="marquee-track">
    <span className="marquee-item">CIENCIA QUE PEGA</span>
    <span className="marquee-item">SABOR UNIVERSITARIO</span>
    <span className="marquee-item">LET'S GET UMAI</span>
    <span className="marquee-item">QUÉ CURIOSO</span>
    <span className="marquee-item">CIENCIA QUE PEGA</span>
    <span className="marquee-item">SABOR UNIVERSITARIO</span>
    <span className="marquee-item">LET'S GET UMAI</span>
    <span className="marquee-item">QUÉ CURIOSO</span>
  </div>
</div>

{/* VOICES / TEAM */}
<section className="section-voices">
  <div className="voices-bg"></div>
  <div className="section-header">
    <div>
      <div className="section-eyebrow">// Casting del Canal</div>
      <h2 className="section-title">LAS VOCES<br /><span className="highlight">DE UMAI</span></h2>
    </div>
  </div>

  <div className="voices-grid">
    <div className="voice-card">
      <div className="voice-role">Docente · CTS</div>
      <div className="voice-name">Dr. Pablo Kreimer</div>
      <div className="voice-area">Referente internacional del CONICET. Traduce conceptos complejos a lenguaje accesible.</div>
      <div className="voice-show">🎙 "La Ciencia Explica"</div>
    </div>

    <div className="voice-card">
      <div className="voice-role">Investigadora · Biotech</div>
      <div className="voice-name">Dra. Patricia Marconi</div>
      <div className="voice-area">Lidera investigaciones en sustentabilidad y crisis ambiental. Alto impacto en Gen Z.</div>
      <div className="voice-show">🧬 "Ciencia que Importa"</div>
    </div>

    <div className="voice-card">
      <div className="voice-role">Estudiantes · Producción</div>
      <div className="voice-name">Alumnos Multimedia</div>
      <div className="voice-area">Nativos del lenguaje streaming. Editan, transmiten y diseñan. Co-productores del canal.</div>
      <div className="voice-show">🎬 "Detrás de Cámara"</div>
    </div>

    <div className="voice-card">
      <div className="voice-role">No Docente · Comunidad</div>
      <div className="voice-name">Staff & Guardia</div>
      <div className="voice-area">Los primeros en recibir a la comunidad. Anécdotas del campus y perspectivas únicas del hospital.</div>
      <div className="voice-show">💛 "Historias de la Guardia"</div>
    </div>
  </div>
</section>

{/* FOOTER */}
    </>
  );
}

export default Home;
