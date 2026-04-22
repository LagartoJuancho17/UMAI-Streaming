import React from 'react';

function UmaiTeExplica() {
  return (
    <div className="pt-24 pb-24 md:pt-32 bg-[var(--black)] min-h-screen px-6 md:px-20">
      <section className="section-programs pb-16">
        <div className="section-header flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-0">
          <div>
            <div className="section-eyebrow">// Programa 02</div>
            <h2 className="section-title">UMAI<br /><span className="highlight">TE EXPLICA</span></h2>
            <p className="hero-desc" style={{ marginTop: '20px', maxWidth: '600px', fontSize: '1.2rem' }}>
              "La universidad tiene muchas puertas. Nosotros te decimos cuál abrir."
            </p>
          </div>
          <span className="program-emoji" style={{ fontSize: '6rem' }}>🎓</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
          <div className="detail-section">
            <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--hot-pink)', marginBottom: '16px', letterSpacing: '2px' }}>¿QUÉ ES?</h3>
            <p style={{ color: 'rgba(245,240,232,0.8)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              Un noticiero de servicio universitario conducido por el personal de Secretaría y Bienestar Estudiantil de la UMAI. El programa más útil del canal: el que resuelve dudas reales, conecta a los estudiantes con los recursos que la universidad ya tiene, y les cuenta cosas que nadie les explicó en el ingreso.<br /><br />
              Es la guía que todos necesitaban y nadie les dio.
            </p>
          </div>

          <div className="detail-section">
            <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--lime-green)', marginBottom: '16px', letterSpacing: '2px' }}>¿CÓMO FUNCIONA?</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(245,240,232,0.8)', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Formato:</strong> Magazine informativo + segmentos cortos temáticos</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Duración:</strong> 30 minutos por emisión</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Frecuencia:</strong> 2 veces por semana (ej: lunes y miércoles 18hs)</li>
              <li style={{ marginBottom: '10px' }}><strong style={{ color: 'var(--white)' }}>Conducción:</strong> Personal de Secretaría + invitado rotativo (docente, psicólogo, referente de área)</li>
            </ul>
          </div>
        </div>

        <div className="detail-section" style={{ marginTop: '60px' }}>
          <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--yellow)', marginBottom: '24px', letterSpacing: '2px' }}>ESTRUCTURA DEL EPISODIO</h3>
          <div className="events-list" style={{ marginTop: 0 }}>
            <div className="event-row flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-10">
              <div className="event-date" style={{ fontSize: '2rem' }}>5<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">📋 EL PARTE SEMANAL</div>
                <div className="event-type">Novedades institucionales: fechas de inscripción, cambios de cursada, eventos próximos. El resumen que sí o sí necesitás antes del lunes.</div>
              </div>
            </div>
            <div className="event-row flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-10">
              <div className="event-date" style={{ fontSize: '2rem' }}>15<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">🔍 TEMA DE LA SEMANA</div>
                <div className="event-type">Un servicio o trámite explicado de arriba a abajo. Con ejemplos reales, errores comunes y tips que no están en el sitio web.</div>
              </div>
            </div>
            <div className="event-row flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-10">
              <div className="event-date" style={{ fontSize: '2rem' }}>5<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">🙋 PREGUNTA DE ESTUDIANTE</div>
                <div className="event-type">Una duda enviada por alguien de la comunidad, respondida en cámara por quien realmente sabe.</div>
              </div>
            </div>
            <div className="event-row flex flex-col md:flex-row text-center md:text-left gap-6 md:gap-10">
              <div className="event-date" style={{ fontSize: '2rem' }}>5<span style={{ fontSize: '0.8rem' }}>MIN</span></div>
              <div>
                <div className="event-title">📍 RECOMENDACIÓN UMAI</div>
                <div className="event-type">Un espacio, recurso o persona de la universidad que pocos conocen. El secreto del campus de la semana.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar px-6 py-10 md:px-20 flex flex-col gap-8 items-center text-center" style={{  background: 'var(--lime-green)' }}>
        <h3 style={{ fontFamily: "'Space Mono', monospace", color: 'var(--black)', letterSpacing: '2px', fontSize: '1.2rem' }}>SEGMENTOS FIJOS</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%' }}>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💊</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Salud Mental en la U</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>Qué servicios psicológicos ofrece la UMAI, cómo acceder, cómo acompañar.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>📝</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Trámites Sin Estrés</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>Inscripción a finales, equivalencias, solicitud de becas: paso a paso, en pantalla.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏥</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Vida en el Hospital</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>Qué pasa adentro del hospital escuela, cómo es hacer práctica ahí.</span>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.1)', padding: '20px', borderRadius: '8px' }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤝</div>
            <strong style={{ display: 'block', color: 'var(--black)' }}>Comunidad UMAI</strong>
            <span style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.7)' }}>Historia de un estudiante, agrupación o iniciativa que vale la pena conocer.</span>
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
            <div className="voice-role" style={{ color: 'var(--hot-pink)' }}>Gestión Universitaria</div>
            <div className="voice-name">Personal de Secretaría</div>
            <div className="voice-area">Los que conocen el funcionamiento real de la institución.</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--lime-green)' }}>Primer Contacto</div>
            <div className="voice-name">Seguridad del Campus</div>
            <div className="voice-area">Los primeros en recibir a todos, con anécdotas y presencia cotidiana.</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--yellow)' }}>Salud y Práctica</div>
            <div className="voice-name">Staff del Hospital</div>
            <div className="voice-area">Perspectivas únicas sobre la vida hospitalaria.</div>
          </div>
          <div className="voice-card">
            <div className="voice-role" style={{ color: 'var(--hot-pink)' }}>Comunidad</div>
            <div className="voice-name">Estudiantes</div>
            <div className="voice-area">Voces reales, consultas reales de cualquier carrera.</div>
          </div>
        </div>
        
        <div className="detail-section" style={{ marginTop: '80px', padding: '40px', background: 'rgba(255,255,255,0.03)', borderLeft: '4px solid var(--yellow)' }}>
          <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2rem', marginBottom: '16px', letterSpacing: '1px' }}>¿POR QUÉ FUNCIONA EN STREAMING?</h3>
          <p style={{ color: 'rgba(245,240,232,0.8)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            El principal motivo por el que los estudiantes abandonan o se pierden dentro de una universidad es la desinformación sobre los recursos disponibles. Este programa convierte la burocracia en contenido. Y lo hace en el formato donde ya están los estudiantes: el stream.
          </p>
        </div>
      </section>
    </div>
  );
}

export default UmaiTeExplica;
