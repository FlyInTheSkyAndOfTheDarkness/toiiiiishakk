import { data } from '../data'
import Reveal from './Reveal'

export default function Dresscode() {
  const dc = data.dresscode
  return (
    <section className="pad center">
      <Reveal className="dress center">
        <div className="pre">Мерекеге орай</div>
        <h2 className="big-title" style={{ fontSize: 'clamp(1.9rem,6vw,2.8rem)' }}>
          {dc.title}
        </h2>
        <div className="fleuron">❦</div>
        <p>{dc.text}</p>
        <p className="big">{dc.big}</p>
        <div className="swatches">
          {dc.colors.map((c) => (
            <span className="swatch" key={c} style={{ background: c }} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
