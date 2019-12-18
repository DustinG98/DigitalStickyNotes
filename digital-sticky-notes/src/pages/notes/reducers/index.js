import { combineReducers } from 'redux'
import noteGroupsReducer from './noteGroupsReducer'

export default combineReducers({
    noteGroups: noteGroupsReducer
})