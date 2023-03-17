import {
    GET_POSTS,
    ADD_POST,
    POST_ERROR
} from "../types";

const postReducer = (state, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: Array.isArray(action.payload) ? action.payload : []
            };
        case ADD_POST :
            return {
                ...state,
                posts: [action.payload.post, ...state.posts]
            };
        case POST_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            throw new Error(`Unsupported type of: ${action.type}`);
    }
}

export default postReducer;