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

export const fetchData = async (url: string) => {
  console.log('ran')

  const response = await fetch(url)
  const data = await response.json()
  return data
}
