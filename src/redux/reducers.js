import { combineReducers } from 'redux'
import {
    INSERT_INTO_DATABASE,
    DELETE_FROM_DATABASE,
    READ_FROM_DATABASE,
    EDIT_DATABASE
} from './actions'

//TODO: Implement actions
function database(state = {}, action) {
  switch (action.type) {
    case INSERT_INTO_DATABASE:
        return state
    case DELETE_FROM_DATABASE:
        return state
    case READ_FROM_DATABASE:
        return state
    case EDIT_DATABASE:
        return state
    default:
      return state
  }
}

const reducers = combineReducers({
  database
})
export default reducers