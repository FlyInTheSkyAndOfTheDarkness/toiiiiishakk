import { useEffect, useState } from 'react'
import Curtain from './components/Curtain'
import Intro from './components/Intro'
import Venue from './components/Venue'
import Dresscode from './components/Dresscode'
import Rsvp from './components/Rsvp'
import Closing from './components/Closing'
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
        <Dresscode />
        <Rsvp />
        <Closing />
      </main>

      <MusicButton start={opened} />
    </>
  )
}
