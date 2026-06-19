import { data } from '../data'
import Reveal from './Reveal'

// Приглашение + сообщение на чистой бумаге (сразу под шторой).
export default function Intro() {
  const h = data.hero
  return (
    <section className="intro-sec center">
      <Reveal className="center">
        <h2 className="intro-title">{h.title}</h2>
        <p className="intro-msg">{h.message1}</p>
        <p className="intro-msg">{h.message2}</p>
        <p className="intro-sign-pre">{h.signPre}</p>
        <p className="intro-sign script">{h.sign}</p>
      </Reveal>
    </section>
  )
}
