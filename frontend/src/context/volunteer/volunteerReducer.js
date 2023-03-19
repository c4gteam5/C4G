import {CLEAR_VOLUNTEER, GET_VOLUNTEERS, SEARCH_VOLUNTEER} from "../types";

const volunteerReducer = (state, action) => {
    switch (action.type) {
        case GET_VOLUNTEERS:
            return {
                ...state,
                volunteers: Array.isArray(action.payload) ? action.payload : []
            };
        case SEARCH_VOLUNTEER:
            return {
                ...state,
                filtered: action.payload === undefined
                    ? state.volunteers
                    : state.volunteers.filter(({ firstName }) => {
                        const testString = `${firstName}`.toLowerCase();
                        return testString.includes(action.payload.toLowerCase());
                    })
            };
        case CLEAR_VOLUNTEER:
            return {
                ...state,
                filtered: null
            };
        default:
            throw new Error(`Action error: ${action}`);
    }
}

export default volunteerReducer;