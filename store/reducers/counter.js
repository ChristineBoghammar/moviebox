import { INCREMENT, DECREMENT } from 'store/actions'

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT.type:
      return state + (Number(action.step) || 1)
    case DECREMENT.type:
      return state - (Number(action.step) || 1)
    default:
      return state
  }
}
