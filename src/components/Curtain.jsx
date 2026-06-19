import { useRef, useState } from 'react'
import { data } from '../data'

// Кіреберіс перде: басқанда видео ойналады, видеоның СОҢЫНДА есімдер
// шыға бастайды (толық бітуін күтпейді), кадр қалады.
export default function Curtain({ onOpen }) {
  const videoRef = useRef(null)
  const revealed = useRef(false)
  const [phase, setPhase] = useState('idle') // idle | playing | open

  const finish = () => {
    if (revealed.current) return
    revealed.current = true
    setPhase('open')
    onOpen()
  }

  // видео жартысынан асқанда (60%) есімдерді ерте көрсетеміз
  const onTime = () => {
    const v = videoRef.current
    if (!v || !v.duration) return
    if (v.currentTime / v.duration >= 0.6) finish()
  }

  const start = () => {
    if (phase !== 'idle') return
    setPhase('playing')
    const v = videoRef.current
    if (!v) return finish()
    v.playbackRate = 2 // штора 2 есе жылдам ашылады
    v.play().catch(() => finish())
  }

  return (
    <section className={`curtain ${phase}`} onClick={start}>
      {/* видео шторы (вход) */}
      <video
        ref={videoRef}
        className="curtain-video"
        playsInline
        muted
        preload="auto"
        poster="/curtain-poster.jpg"
        onTimeUpdate={onTime}
        onEnded={finish}
      >
        <source src="/curtain-video.mp4" type="video/mp4" />
      </video>

      {/* театральный ламбрекен (челка) со скошенным фестонным краем */}
      <div className="curtain-valance" aria-hidden="true" />

      <div className="curtain-hint">{data.curtain.hint}</div>

      {/* в проёме шторы — только имена (помещаются в широкой части) */}
      <div className="curtain-content">
        <h1 className="hero__names">
          {data.bride}
          <span className="hero__amp">&amp;</span>
          {data.groom}
        </h1>
        <div className="curtain-date">
          <span className="curtain-date__line" />
          {data.curtain.date}
          <span className="curtain-date__line" />
        </div>
      </div>

      <div className="scrollcue curtain-scroll">
        <span>{data.hero.scroll}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
