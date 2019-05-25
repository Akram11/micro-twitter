import {combineReducers} from Redux
import tweets from './tweets'
import users from './users'
import authedUser from './authedUser'

export default combineReducers({
    users, tweets, authedUser
})