import { CONSTANTS } from '../actions'

export const fetchInitState = (data) => {
    return {
        type: CONSTANTS.FETCH_INIT_STATE,
        payload: {data}
    }
}