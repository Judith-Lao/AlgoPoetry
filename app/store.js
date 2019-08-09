import {createStore, applyMiddleware} from 'redux'
import reduxLogger from 'redux-logger'

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'

export const incrementCounter = () => {
  return {type: INCREMENT_COUNTER}
}

// initial state
const initialState = {
  count: 0
}

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {... state, count: state.count + 1}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(reduxLogger))

export default store
