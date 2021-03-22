import {State, Action} from '../context/stationsContext'

export const setCurrentlyPlaying = (state: State, action: Action) => {
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
