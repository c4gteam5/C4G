import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import PostContext from "./postContext";
import postReducer from "./postReducer";
import {ADD_POST, GET_POSTS, POST_ERROR} from "../types";

export const usePosts = () => {
    const { state, dispatch } = useContext(PostContext);
    return [state, dispatch];
};

export const getPosts = async (dispatch) => {
    try {
        const res = await axios.get("/api/blog/getall");
        dispatch({
            type: GET_POSTS,
            payload: res.data.posts
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err.response
        });
    }
};

export const addPost = async (post, dispatch) => {
    try {
        const res = await axios.post("/api/blog/create", post);
        dispatch({
            type: ADD_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err.response.msg
        });
    }
};

const PostState = (props) => {
    const initialState = {
        posts: [],
        error: null
    };

    const [state, dispatch] = useReducer(postReducer, initialState);

    return (
        <PostContext.Provider value={{ state: state, dispatch }}>
            {props.children}
        </PostContext.Provider>
    );
};

export default PostState;

