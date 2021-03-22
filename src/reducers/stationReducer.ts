import {actionTypes, State, Action} from '../context/stationsContext'
import {setCurrentlyPlaying} from '../utils/helperFunctions'

export function stationReducer(state: State, action: Action) {
  switch (action.type) {
    case actionTypes.getStations:
      return state
    case actionTypes.setCurrentlyPlaying:
      if (state.currentlyPlaying === action.payload) {
        return state
      }
      return Object.assign({}, state, {
        stations: setCurrentlyPlaying(state, action),
        currentlyPlaying: action.payload,
      })

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
