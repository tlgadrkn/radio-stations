import Base from './components/Base'
import {StationProvider} from './context/stationsContext'
function App() {
  return (
    <StationProvider>
      <div className="App">
        <Base />
      </div>
    </StationProvider>
  )
}

export default App
