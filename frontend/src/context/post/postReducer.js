import {
    GET_POSTS,
    ADD_POST
} from "../types";

const postReducer = (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case ADD_POST :
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        default:
            throw new Error(`Unsupported type of: ${action.type}`);
    }
}

export default postReducer;