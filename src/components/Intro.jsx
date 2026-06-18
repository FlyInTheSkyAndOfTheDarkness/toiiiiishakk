import { data } from '../data'
import Reveal from './Reveal'

// Приглашение + сообщение на чистой бумаге (сразу под шторой).
export default function Intro() {
  return (
    <section className="intro-sec center">
      <Reveal className="center">
        <div className="script intro-mono">{data.monogram}</div>
        <div className="pre">{data.hero.intro}</div>
        <div className="fleuron">❦</div>
        <p className="intro-msg">{data.hero.message}</p>
      </Reveal>
    </section>
  )
}
