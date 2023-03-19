import {GET_VOLUNTEERS, SEARCH_VOLUNTEER} from "../types";

const volunteerReducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
        case GET_VOLUNTEERS:
            return {
                ...state,
                volunteers: Array.isArray(action.payload) ? action.payload : []
            };
        case SEARCH_VOLUNTEER:
            return {

            };
        default:
            throw new Error(`Action error: ${action}`);
    }
}

export default volunteerReducer;