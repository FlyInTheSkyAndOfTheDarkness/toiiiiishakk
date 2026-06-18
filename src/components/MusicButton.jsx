import { useEffect, useRef, useState } from 'react'
import { data } from '../data'

// Кнопка фоновой музыки. Показывается только если задан data.music.
export default function MusicButton({ start }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  // Пытаемся мягко завести музыку после открытия конверта.
  useEffect(() => {
    if (!data.music || !start) return
    const a = audioRef.current
    a.volume = 0.5
    a.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [start])

  if (!data.music) return null

  const toggle = () => {
    const a = audioRef.current
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play().then(() => setPlaying(true)).catch(() => {}) }
  }

  return (
    <>
      <audio ref={audioRef} src={data.music} loop preload="auto" />
      <button className={`music-btn ${playing ? '' : 'off'}`} onClick={toggle} title="Музыка">
        {playing ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4z" /><path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M19 5a9 9 0 0 1 0 14" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5 6 9H2v6h4l5 4z" /><line x1="22" y1="9" x2="16" y2="15" /><line x1="16" y1="9" x2="22" y2="15" />
          </svg>
        )}
      </button>
    </>
  )
}
