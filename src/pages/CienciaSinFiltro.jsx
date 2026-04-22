import React from 'react';

function CienciaSinFiltro() {
  return (
    <div className="pt-24 pb-24 md:pt-32 bg-[var(--black)] min-h-screen px-6 md:px-20">
      <section className="section-programs pb-16">
        <div className="section-header flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-0">
          <div>
            <div className="section-eyebrow">// Programa 01</div>
            <h2 className="section-title">CIENCIA<br /><span className="highlight">SIN FILTRO</span></h2>
            <p className="hero-desc" style={{ marginTop: '20px', maxWidth: '600px', fontSize: '1.2rem' }}>
              "La ciencia no es aburrida. Eras vos que la veías mal."
            </p>
          </div>
          <span className="program-emoji" style={{ fontSize: '6rem' }}>🔬</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
          <div className="detail-section">
            <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--hot-pink)', marginBottom: '16px', letterSpacing: '2px' }}>¿QUÉ ES?</h3>
            <p style={{ color: 'rgba(245,240,232,0.8)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              Un programa de debate y divulgación científica en vivo donde investigadores, docentes y becarios de la UMAI se sientan frente a cámara y le hablan directo a la Generación Z. Sin tecnicismos innecesarios, sin formalidad forzada. La academia baja del pedestal.
            </p>
          </div>

          <div className="detail-section">
            <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--lime-green)', marginBottom: '16px', letterSpacing: '2px' }}>¿CÓMO FUNCIONA?</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(245,240,232,0.8)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Formato:</strong> Talk-show de debate con panel rotativo</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Duración:</strong> 45 a 60 minutos por emisión</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Frecuencia:</strong> 1 vez por semana (ej: jueves 19hs)</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Conducción:</strong> 1 estudiante de Tecnología Multimedial + 1 investigador invitado fijo</li>
            </ul>
          </div>
        </div>

        <div className="detail-section" style={{ marginTop: '60px' }}>
          <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--yellow)', marginBottom: '24px', letterSpacing: '2px' }}>ESTRUCTURA DEL EPISODIO</h3>
          <div className="events-list" style={{ marginTop: 0 }}>
            <div className="event-row flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-10">
              <div className="event-date" style={{ fontSize: '2rem' }}>5<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">⚡ COLD OPEN</div>
                <div className="event-type">Una noticia de ciencia o tecnología de la semana, presentada como titular de Instagram. Gancho inmediato.</div>
              </div>
            </div>
            <div className="event-row flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-10">
              <div className="event-date" style={{ fontSize: '2rem' }}>25<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">🎙 EL DEBATE</div>
                <div className="event-type">2 o 3 investigadores del CCTS, CEBBAD u otros debaten. Se busca fricción intelectual real, no panelismo vacío.</div>
              </div>
            </div>
            <div className="event-row flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-10">
              <div className="event-date" style={{ fontSize: '2rem' }}>10<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">📲 PREGUNTA DEL STREAM</div>
                <div className="event-type">El chat manda preguntas. Los investigadores responden en tiempo real. Sin filtro editorial.</div>
              </div>
            </div>
            <div className="event-row flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-10">
              <div className="event-date" style={{ fontSize: '2rem' }}>10<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">🎯 EL CIERRE</div>
                <div className="event-type">Cada panelista da su veredicto en una frase. El conductor sintetiza. Queda el clip viral.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar" className="px-6 py-10 md:px-20 flex flex-col gap-8 items-center text-center" style={{  }}>
        <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--black)', letterSpacing: '2px', fontSize: '1.2rem' }}>EJES TEMÁTICOS FIJOS</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%' }}>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤖</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Inteligencia Artificial</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>"¿La IA nos va a dejar sin trabajo o nos va a liberar?"</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌿</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Crisis Ambiental</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>"El litio argentino: ¿recurso o condena?"</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧠</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Neurociencias</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>"¿Se puede entrenar la atención en la era TikTok?"</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧬</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Biotecnología</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>"Edición genética: ¿hasta dónde podemos llegar?"</span>
          </div>
        </div>
      </div>

      <section className="section-voices" style={{ paddingTop: '80px' }}>
        <div className="section-header flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-0">
          <div>
            <div className="section-eyebrow">// Protagonistas</div>
            <h2 className="section-title">VOCES DEL<br /><span className="highlight">PROGRAMA</span></h2>
          </div>
        </div>
        
        <div className="voices-grid" style={{ marginTop: '40px' }}>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--hot-pink)' }}>Sociología de la Ciencia</div>
            <div className="voice-name">Dr. Pablo Kreimer</div>
            <div className="voice-area">(CONICET / CCTS)</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--lime-green)' }}>Biotecnología y Ambiente</div>
            <div className="voice-name">Dra. Patricia Marconi</div>
            <div className="voice-area">(CEBBAD)</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--yellow)' }}>Tecnologías y Plataformas</div>
            <div className="voice-name">Equipo CCTS</div>
            <div className="voice-area">Expertos en cultura digital.</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--hot-pink)' }}>Nuevas Voces</div>
            <div className="voice-name">Becarios Doctorales</div>
            <div className="voice-area">El punto de vista joven y honesto de quien vive la ciencia por dentro.</div>
          </div>
        </div>
        
        <div className="detail-section" style={{ marginTop: '80px', padding: '40px', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--lime-green)' }}>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', marginBottom: '16px', letterSpacing: '1px' }}>¿POR QUÉ FUNCIONA EN STREAMING?</h3>
          <p style={{ color: 'rgba(245,240,232,0.8)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Los temas de IA, ambiente y neurociencia son los más consumidos por jóvenes de 18 a 30 años en plataformas digitales. La UMAI tiene los expertos. El canal tiene el formato. Es la combinación perfecta.
          </p>
        </div>
      </section>
    </div>
  );
}

export default CienciaSinFiltro;
