import { useEffect, useState } from 'react'
import Curtain from './components/Curtain'
import Intro from './components/Intro'
import Venue from './components/Venue'
import Calendar from './components/Calendar'
import Rsvp from './components/Rsvp'
import MusicButton from './components/MusicButton'

export default function App() {
  const [opened, setOpened] = useState(false)

  // Перде ашылғанша скролл жабық тұрады.
  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
  }, [opened])

  return (
    <>
      <Curtain onOpen={() => setOpened(true)} />

      <main>
        <Intro />
        <Venue />
        <Calendar />
        <Rsvp />
      </main>

      <MusicButton start={opened} />
    </>
  )
}
