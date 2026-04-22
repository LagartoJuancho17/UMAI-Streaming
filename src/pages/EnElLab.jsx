import React from 'react';

function EnElLab() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px', background: 'var(--black)', minHeight: '100vh' }}>
      <section className="section-programs" style={{ paddingBottom: '60px' }}>
        <div className="section-header">
          <div>
            <div className="section-eyebrow">// Programa 03</div>
            <h2 className="section-title">EN EL<br /><span className="highlight">LAB</span></h2>
            <p className="hero-desc" style={{ marginTop: '20px', maxWidth: '600px', fontSize: '1.2rem' }}>
              "La ciencia no pasa solo en los papers. Pasa todos los días, acá adentro."
            </p>
          </div>
          <span className="program-emoji" style={{ fontSize: '6rem' }}>🎬</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
          <div className="detail-section">
            <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--hot-pink)', marginBottom: '16px', letterSpacing: '2px' }}>¿QUÉ ES?</h3>
            <p style={{ color: 'rgba(245,240,232,0.8)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              Un docu-vlog estudiantil en formato serie, donde los propios alumnos de Tecnología Multimedial de la UMAI recorren, filman y narran la vida real de los laboratorios, centros de investigación y proyectos en curso de la universidad. Cinema verité universitario. Cámara en mano, sin guion rígido, con todo el caos creativo que eso implica.
            </p>
          </div>

          <div className="detail-section">
            <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--lime-green)', marginBottom: '16px', letterSpacing: '2px' }}>¿CÓMO FUNCIONA?</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(245,240,232,0.8)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Formato:</strong> Docu-serie semanal + shorts para redes</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Duración:</strong> 20 a 35 minutos por episodio</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Frecuencia:</strong> 1 vez por semana (ej: viernes 20hs)</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Conducción:</strong> Rotativamente por estudiantes de Tecnología Multimedial — cada uno trae su voz y estética</li>
            </ul>
          </div>
        </div>

        <div className="detail-section" style={{ marginTop: '60px' }}>
          <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--yellow)', marginBottom: '24px', letterSpacing: '2px' }}>ESTRUCTURA DEL EPISODIO</h3>
          <div className="events-list" style={{ marginTop: 0 }}>
            <div className="event-row">
              <div className="event-date" style={{ fontSize: '2rem' }}>3<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">🎥 LA ENTRADA</div>
                <div className="event-type">El conductor de la semana aparece en un punto del campus y plantea la pregunta del episodio. Sin setup, sin teleprompter. Cámara en mano.</div>
              </div>
            </div>
            <div className="event-row">
              <div className="event-date" style={{ fontSize: '2rem' }}>15<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">🚪 EL RECORRIDO</div>
                <div className="event-type">Se entra a un laboratorio, taller, espacio o proyecto. Se registra lo que pasa realmente. Se entrevista a quienes están ahí: investigadores, becarios, técnicos.</div>
              </div>
            </div>
            <div className="event-row">
              <div className="event-date" style={{ fontSize: '2rem' }}>10<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">💬 LA CHARLA</div>
                <div className="event-type">Conversación informal con el protagonista del episodio. Preguntas que ningún periodista convencional haría.</div>
              </div>
            </div>
            <div className="event-row">
              <div className="event-date" style={{ fontSize: '2rem' }}>2<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">📱 EL CLIP FINAL</div>
                <div className="event-type">Una idea del episodio resumida en 60 segundos para redes sociales. El estudiante lo edita él mismo.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar" style={{ padding: '40px 80px', display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center', textAlign: 'center', background: 'var(--yellow)' }}>
        <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--black)', letterSpacing: '2px', fontSize: '1.2rem' }}>SERIES DENTRO DEL PROGRAMA</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%' }}>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🧫</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Dentro del CEBBAD</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>El Centro de Ecología y Biodiversidad en acción: biología, paleontología, ambiente.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💡</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Innovación Abierta</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>Los proyectos del concurso universitario: estudiantes que crean startups y soluciones reales.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎨</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Arte Mayor</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>El proceso creativo de los trabajos finales de Diseño Multimedial y Videojuegos.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🌍</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>ActivaMente On Air</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>El programa para personas mayores de la UMAI, con sus protagonistas hablando a cámara.</span>
          </div>
        </div>
      </div>

      <section className="section-voices" style={{ paddingTop: '80px' }}>
        <div className="section-header">
          <div>
            <div className="section-eyebrow">// Protagonistas</div>
            <h2 className="section-title">VOCES DEL<br /><span className="highlight">PROGRAMA</span></h2>
          </div>
        </div>
        
        <div className="voices-grid" style={{ marginTop: '40px' }}>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--hot-pink)' }}>Investigadores</div>
            <div className="voice-name">Becarios Doctorales</div>
            <div className="voice-area">Jóvenes investigadores que hablan del proceso científico con honestidad y cercanía.</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--lime-green)' }}>Productores</div>
            <div className="voice-name">Estudiantes Multimedia</div>
            <div className="voice-area">Co-productores y protagonistas al mismo tiempo. Cámara en mano.</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--yellow)' }}>Innovadores</div>
            <div className="voice-name">Emprendedores</div>
            <div className="voice-area">Los que ganan concursos internos, los que llevan proyectos adelante con recursos mínimos.</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--hot-pink)' }}>Comunidad Viva</div>
            <div className="voice-name">Participantes de ActivaMente</div>
            <div className="voice-area">Adultos mayores que usan la tecnología y el aprendizaje para mantenerse activos.</div>
          </div>
        </div>
        
        <div className="detail-section" style={{ marginTop: '80px', padding: '40px', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--hot-pink)' }}>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', marginBottom: '16px', letterSpacing: '1px' }}>¿POR QUÉ FUNCIONA EN STREAMING?</h3>
          <p style={{ color: 'rgba(245,240,232,0.8)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            El contenido detrás de escena (behind the scenes) es uno de los formatos más consumidos en YouTube, Twitch y TikTok. La UMAI tiene espacios increíbles que muy pocos conocen. Este programa los abre, los humaniza y los convierte en contenido que la gente quiere ver aunque no sea estudiante de la universidad.
          </p>
        </div>
      </section>
    </div>
  );
}

export default EnElLab;
