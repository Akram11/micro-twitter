import { RECEIVE_TWEETS } from '../actions/tweets'
import {TOGGLE_LIKE} from '../actions/tweets'
import { Z_FILTERED } from 'zlib';

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_LIKE:
            return {
                ...state,
                [action.id]: {
                    ...[action.id],
                    likes: action.hasLiked === true ? 
                    state[action.id].likes.filter((uid) => uid !== action.autheUser)
                    : state[action.id].like.concat(action.autheUser)
                }
            }
        default: return state
    }
}