import * as React from 'react'

interface StationItems {
  name: string
  number: string
  isOpen: boolean
}

interface State {
  stations: Array<StationItems>
  // dispatch: React.Dispatch<React.SetStateAction<string>>
}

interface ActionTypes {
  initialize?: string
  getStations: string
  updateStations: string
  //   resetGrid: string,
}
type Action = {type: string; payload: string}

const initialState: State = {
  stations: [
    {name: 'Putin FM', number: '66,6', isOpen: false},
    {name: 'Dribbble FM', number: '101,2', isOpen: true},
    {name: 'Doge FM', number: '99,4', isOpen: false},
    {name: 'Ballads FM', number: '87,1', isOpen: false},
    {name: 'Maximum FM', number: '142,2', isOpen: false},
  ],
}

const actionTypes: ActionTypes = {
  initialize: 'INITIALIZE_GRID',
  getStations: 'GET_STATIONS',
  updateStations: 'UPDATE_STATIONS',
}

const StationContext = React.createContext({} as State)
export const StationDispatch = React.createContext<
  React.Dispatch<Action> | undefined
>(undefined)

function stationReducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.getStations:
      return initialState
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const StationProvider: React.FC = ({children, ...props}) => {
  const [stations, dispatch] = React.useReducer(stationReducer, initialState)

  return (
    <StationContext.Provider value={stations}>
      <StationDispatch.Provider value={dispatch}>
        {children}
      </StationDispatch.Provider>
    </StationContext.Provider>
  )
}

function useStationContext() {
  const context = React.useContext(StationContext)
  const dispatch = React.useContext(StationDispatch)
  if (!context) {
    throw new Error('useStationContext must be used within a StationProvider')
  }
  return [context, dispatch]
}

export {useStationContext, StationProvider}
