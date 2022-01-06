import * as actions from '../actions/actionTypes'
const initialState = []

const BusBooked = (state = initialState, action) => {
  switch (action.type) {
    case actions.BusBooked:
      return [...state, action.payload.Bus]
    default:
      return state
  }
}

export default BusBooked
