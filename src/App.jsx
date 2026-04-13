import { useState } from 'react'

const ORANGE = '#ff6a00'
const DARK   = '#1a1a1a'
const GRAY   = '#555555'
const LIGHT  = '#f9f9f9'
const WHITE  = '#ffffff'

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: DARK, margin: 0, padding: 0 }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <CtaFinal />
    </div>
  )
}

/* ── NAVBAR ── */
function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      borderBottom: '1px solid #eee',
      background: WHITE,
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <Logo />
      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="outline" label="Acceder" />
        <Button variant="primary" label="Solicitar demo" />
      </div>
    </nav>
  )
}

/* ── LOGO ── */
function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffb300" />
            <stop offset="100%" stopColor="#ff5500" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="92" height="92" rx="18" fill="url(#lg)" />
        <path d="M12 82 Q35 58 58 44 Q74 34 90 28" stroke="white" strokeWidth="11" strokeLinecap="round" fill="none" />
        <path d="M8 94 Q22 80 38 72" stroke="white" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.65" />
      </svg>
      <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.3px', color: DARK }}>
        Klaizen
      </span>
    </div>
  )
}

/* ── BUTTON ── */
function Button({ variant = 'primary', label, onClick }) {
  const base = {
    padding: '10px 22px',
    borderRadius: 9,
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    transition: 'opacity 0.15s',
  }
  const styles = {
    primary: { ...base, background: ORANGE, color: WHITE },
    outline:  { ...base, background: 'transparent', color: DARK, border: `2px solid #ddd` },
    ghost:    { ...base, background: LIGHT, color: DARK },
  }
  return (
    <button style={styles[variant] || styles.primary} onClick={onClick}>
      {label}
    </button>
  )
}

/* ── HERO ── */
function Hero() {
  return (
    <section style={{
      textAlign: 'center',
      padding: '96px 24px 80px',
      background: 'linear-gradient(135deg, #fff8f2 0%, #f0f4ff 100%)',
    }}>
      <div style={{
        display: 'inline-block',
        background: '#fff0e6',
        color: ORANGE,
        fontSize: 13,
        fontWeight: 600,
        padding: '6px 16px',
        borderRadius: 999,
        marginBottom: 24,
      }}>
        Para centros de secundaria del País Vasco
      </div>

      <h1 style={{
        fontSize: 'clamp(32px, 5vw, 56px)',
        fontWeight: 800,
        lineHeight: 1.1,
        letterSpacing: '-1.5px',
        maxWidth: 700,
        margin: '0 auto 20px',
      }}>
        El bienestar del aula,{' '}
        <span style={{ color: ORANGE }}>en tus manos.</span>
      </h1>

      <p style={{
        fontSize: 18,
        color: GRAY,
        maxWidth: 520,
        margin: '0 auto 36px',
        lineHeight: 1.65,
      }}>
        Diagnostica el clima emocional de tu clase, lanza intervenciones
        y mide si realmente funcionan. Todo en minutos, de forma anónima.
      </p>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button variant="primary" label="Solicitar demo gratuita" />
        <Button variant="ghost" label="Ver cómo funciona" />
      </div>

      <div style={{ marginTop: 48 }}>
        <HeroDashboard />
      </div>
    </section>
  )
}

/* ── HERO DASHBOARD (visual decorativo) ── */
function HeroDashboard() {
  const bars = [
    { label: 'Motivación',  pct: 58, color: '#ff6a00' },
    { label: 'Bienestar',   pct: 78, color: '#059669' },
    { label: 'Pertenencia', pct: 42, color: '#dc2626' },
    { label: 'Estrés',      pct: 72, color: '#d97706' },
  ]
  return (
    <div style={{
      display: 'inline-block',
      background: WHITE,
      border: '1px solid #eee',
      borderRadius: 20,
      padding: '24px 28px',
      boxShadow: '0 12px 40px rgba(0,0,0,0.07)',
      maxWidth: 420,
      width: '100%',
      textAlign: 'left',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#aaa', marginBottom: 16 }}>
        Estado del aula · 2º Bach A
      </div>
      {bars.map(b => (
        <div key={b.label} style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4 }}>
            <span style={{ fontWeight: 500 }}>{b.label}</span>
            <span style={{ fontWeight: 700, color: b.color }}>{(b.pct / 20).toFixed(1)}</span>
          </div>
          <div style={{ height: 6, background: '#f0f0f0', borderRadius: 6, overflow: 'hidden' }}>
            <div style={{ width: `${b.pct}%`, height: '100%', background: b.color, borderRadius: 6 }} />
          </div>
        </div>
      ))}
      <div style={{
        marginTop: 16,
        padding: '10px 12px',
        background: '#f0fdf4',
        borderRadius: 10,
        fontSize: 12,
        color: '#166534',
        fontWeight: 500,
      }}>
        ✅ Intervención aplicada · Pertenencia +1.1 ↑
      </div>
    </div>
  )
}

/* ── HOW IT WORKS ── */
function HowItWorks() {
  const steps = [
    {
      icon: '📋',
      title: 'Medir',
      desc: 'El alumnado responde un check-in de 3 minutos sobre motivación, bienestar, relaciones y estrés.',
    },
    {
      icon: '📊',
      title: 'Entender',
      desc: 'El docente recibe un dashboard claro con alertas, evolución semanal y recomendaciones de IA.',
    },
    {
      icon: '⚡',
      title: 'Mejorar',
      desc: 'Klaizen propone actividades concretas. Las aplicáis en clase y medís el impacto real.',
    },
  ]

  return (
    <section style={{ padding: '80px 24px', background: WHITE }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: ORANGE, marginBottom: 12 }}>
          CÓMO FUNCIONA
        </div>
        <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, letterSpacing: '-0.8px', marginBottom: 48 }}>
          Un ciclo completo, de diagnóstico a mejora
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
        }}>
          {steps.map((s, i) => (
            <StepCard key={i} step={s} number={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── STEP CARD ── */
function StepCard({ step, number }) {
  return (
    <div style={{
      padding: '28px 24px',
      borderRadius: 16,
      border: '1.5px solid #f0f0f0',
      textAlign: 'left',
      background: WHITE,
    }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: '#fff0e6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 22,
        marginBottom: 16,
      }}>
        {step.icon}
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, color: ORANGE, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
        Paso {number}
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{step.title}</div>
      <div style={{ fontSize: 14, color: GRAY, lineHeight: 1.6 }}>{step.desc}</div>
    </div>
  )
}

/* ── CTA FINAL ── */
function CtaFinal() {
  return (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(135deg, #ff6a00, #ff4400)',
      textAlign: 'center',
    }}>
      <h2 style={{
        fontSize: 'clamp(24px, 3vw, 38px)',
        fontWeight: 800,
        color: WHITE,
        letterSpacing: '-0.8px',
        marginBottom: 12,
      }}>
        Empieza gratis con una clase.
      </h2>
      <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', marginBottom: 32 }}>
        Si ves impacto, escala al centro. Sin compromiso.
      </p>
      <Button variant="outline" label="Solicitar demo gratuita →" />
    </section>
  )
}
