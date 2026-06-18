import { data } from '../data'
import Reveal from './Reveal'
import Stamp from './Stamp'

export default function Closing() {
  const c = data.closing
  return (
    <section className="pad center">
      <Reveal className="closing-stamp">
        <Stamp postmark={{ label: data.monogram + ' · ' + data.year, style: { left: '-16px', bottom: '-20px' } }}>
          <div className="center">
            <h2 className="closing-title">{c.title}</h2>
            <p className="closing-text">{c.text}</p>
            <p className="closing-sign">{c.sign}</p>
          </div>
        </Stamp>
      </Reveal>
    </section>
  )
}
