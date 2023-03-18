import {
    GET_POSTS,
    ADD_POST,
    POST_ERROR, SET_CURRENT_POST, CLEAR_CURRENT_POST, DELETE_POST, UPDATE_POST
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(
                    (post) => post._id !== action.payload
                )
            };
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post) =>
                    post._id === action.payload.post._id ? action.payload.post : post
                )
            };
        case SET_CURRENT_POST:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT_POST:
            return {
                ...state,
                current: null
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