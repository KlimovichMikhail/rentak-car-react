import { createStore } from 'redux'
import { rootReducer, initialState } from '../redusers/carReduser'

export const store = createStore(rootReducer, initialState)