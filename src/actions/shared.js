import { getInitialData } from '../utils/api'

export function handleInatialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ tweets, users }) => {

            })
    }
}