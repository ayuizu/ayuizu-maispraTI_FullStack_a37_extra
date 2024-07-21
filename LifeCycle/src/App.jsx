import './App.css'
import LimitedCounter from './components/LimitedCounter'
import PersistentCounter from './components/PersistentCounter'
import RealTimeClock from './components/RealTimeClock'
import TitleUpdater from './components/TitleUpdater'
import ToggleText from './components/ToggleText'
import WindowSize from './components/WindowSize'

function App() {

  return (
    <>
      <h1>Reforçando - Aula 37</h1>
      <h2>Ciclo de vida em componentes funcionais</h2>
      <hr />
      <h3></h3>
      <TitleUpdater />
      <hr />
      <WindowSize />
      <hr />
      <PersistentCounter />
      <hr />
      <RealTimeClock />
      <hr />
      <ToggleText />
      <hr />
      <LimitedCounter />
      <hr />
    </>
  )
}

export default App
