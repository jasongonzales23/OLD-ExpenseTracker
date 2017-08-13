import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

let middleware = [
  thunk,
]

let enhancers = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
]

let composeEnhancers = compose

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middleware),
    ...enhancers,
  )
)

export default store
