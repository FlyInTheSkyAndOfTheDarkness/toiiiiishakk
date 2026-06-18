import { useEffect, useRef, useState } from 'react'

// Деликатное появление при скролле через IntersectionObserver.
export default function Reveal({ children, className = '', as: Tag = 'div', style }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.14 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} style={style} className={`reveal-up ${shown ? 'in' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
