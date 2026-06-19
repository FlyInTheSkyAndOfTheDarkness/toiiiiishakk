import { data } from '../data'
import Reveal from './Reveal'
import Stamp from './Stamp'

export default function Venue() {
  const v = data.venue
  return (
    <section className="pad center">
      <Reveal>
        <div className="pre">{v.pre}</div>
        <div className="fleuron">❦</div>
      </Reveal>

      <Reveal className="venue-stamp">
        <Stamp postmark={{ label: v.stampLabel, style: { right: '-18px', top: '-22px' } }}>
          <div className="center">
            <h2 className="venue-name">{v.name}</h2>
            {v.address.map((a, i) => (
              <p className="venue-addr" key={i}>{a}</p>
            ))}
            <p className="venue-date">{v.datetime}</p>

            <div className="map-frame">
              <iframe src={v.mapEmbed} title={v.name} loading="lazy" allowFullScreen />
            </div>
          </div>
        </Stamp>
      </Reveal>
    </section>
  )
}
