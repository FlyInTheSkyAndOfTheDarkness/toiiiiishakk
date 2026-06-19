import { data } from '../data'
import Reveal from './Reveal'

const WEEK = ['Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сб', 'Жк']
const MONTHS_KK = [
  'Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым',
  'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан',
]

export default function Calendar() {
  const { year, month, day } = data.calendar
  const startCol = (new Date(year, month - 1, 1).getDay() + 6) % 7 // Дс = 0
  const daysInMonth = new Date(year, month, 0).getDate()

  const cells = []
  for (let i = 0; i < startCol; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <section className="pad center">
      <Reveal className="center">
        <div className="cal-rule" aria-hidden="true" />
        <h3 className="cal-month">{MONTHS_KK[month - 1]} {year}</h3>
        <div className="cal-grid">
          {WEEK.map((w) => (
            <span className="cal-wd" key={w}>{w}</span>
          ))}
          {cells.map((c, i) => (
            <span className={`cal-day${c === day ? ' cal-day--mark' : ''}`} key={i}>
              {c === day && (
                <svg className="cal-heart" viewBox="0 0 32 30" aria-hidden="true">
                  <path d="M16 27C5 19 1 13 1 8.5 1 4.4 4.2 1.5 8 1.5c2.6 0 5 1.6 6.4 4 .6 1 1.6 1 2.2 0C18 3.1 20.4 1.5 23 1.5c3.8 0 7 2.9 7 7C30 13 26 19 16 27Z" />
                </svg>
              )}
              {c || ''}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
