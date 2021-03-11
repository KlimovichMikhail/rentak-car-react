import {combineReducers} from 'redux'
import CarReducers from './carReduser'

const allReducers = combineReducers({
    cars: CarReducers
})

export default allReducers