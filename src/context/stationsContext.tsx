import * as React from 'react'

export interface StationItems {
  name: string
  number: string
  isOpen: boolean
}

export interface State {
  stations: Array<StationItems>
  currentlyPlaying: string | null
}

interface ActionTypes {
  setCurrentlyPlaying: string
  getStations: string
  updateStations: string
}

type Action = {
  type: string
  payload: string | boolean | Array<StationItems> | null
}

const initialState: State = {
  stations: [
    {name: 'Putin FM', number: '66,6', isOpen: false},
    {name: 'Dribbble FM', number: '101,2', isOpen: false},
    {name: 'Doge FM', number: '99,4', isOpen: false},
    {name: 'Ballads FM', number: '87,1', isOpen: false},
    {name: 'Maximum FM', number: '142,2', isOpen: false},
  ],
  currentlyPlaying: null,
}

const actionTypes: ActionTypes = {
  getStations: 'GET_STATIONS',
  updateStations: 'UPDATE_STATIONS',
  setCurrentlyPlaying: 'SET_CURRENTLY_PLAYING',
}

const StationContext = React.createContext({} as State)
export const StationDispatch = React.createContext<React.Dispatch<Action> | null>(
  null,
)

function stationReducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.getStations:
      return initialState
    case actionTypes.setCurrentlyPlaying:
      if (state.currentlyPlaying === action.payload) {
        return state
      }
      const filteredStations = [...state.stations]

      for (let station of filteredStations) {
        if (station.number !== action.payload && station.isOpen) {
          station.isOpen = false
        } else if (station.number === action.payload) {
          station.isOpen = true
        }
      }

      return Object.assign({}, state, {
        stations: filteredStations,
        currentlyPlaying: action.payload,
      })

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const StationProvider: React.FC = ({children, ...props}) => {
  const [state, dispatch] = React.useReducer(stationReducer, initialState)

  return (
    <StationContext.Provider value={state}>
      <StationDispatch.Provider value={dispatch}>
        {children}
      </StationDispatch.Provider>
    </StationContext.Provider>
  )
}
function useStationDispatch() {
  const dispatch = React.useContext(StationDispatch)
  if (!dispatch) {
    throw new Error('useStationDispatch must be used within a StationProvider')
  }
  return dispatch
}

function useStationContext() {
  const context = React.useContext(StationContext)

  if (!context) {
    throw new Error('useStationContext must be used within a StationProvider')
  }
  return context
}

export {useStationContext, useStationDispatch, StationProvider}
