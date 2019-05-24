export const  RECEIVE_AUTHED_USERS = 'RECEIVE_AUTHED_USERS'

export function setAuthedUser(users){
    return{
        type: RECEIVE_AUTHED_USERS,
        users
    }
}