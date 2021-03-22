import {State, Action} from '../context/stationsContext'

const setCurrentlyPlaying = (state: State, action: Action) => {
  const stations = [...state.stations]

  for (let station of stations) {
    if (station.number !== action.payload && station.isOpen) {
      station.isOpen = false
    } else if (station.number === action.payload) {
      station.isOpen = true
    }
  }
  return stations
}

const getCurrentlyPlayingStation = (number: string | null, state: State) => {
  const station = [...state.stations].filter(item => item.isOpen)
  return station
}

const fetchData = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export {getCurrentlyPlayingStation, fetchData, setCurrentlyPlaying}
