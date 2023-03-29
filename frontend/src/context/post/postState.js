import React, { useReducer, useContext } from 'react';
import axios from 'axios';
import PostContext from "./postContext";
import postReducer from "./postReducer";
import {
    ADD_POST,
    CLEAR_CURRENT_POST,
    DELETE_POST,
    GET_POSTS,
    POST_ERROR,
    SET_CURRENT_POST,
    UPDATE_POST
} from "../types";
import getBaseURL from "../../components/utils/GetServerUrl";
import { useAuthContext } from '../../hooks/useAuthContext';




export const usePosts = () => {
    const { state, dispatch } = useContext(PostContext);
    return [state, dispatch];
};

export const getPosts = async (dispatch) => {
    try {
        const res = await axios.get(getBaseURL + "api/blog/getall");
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

export const addPost = async (post, dispatch, token) => {

    
    
    try {
        const res = await axios.post(getBaseURL + "api/blog/create", post, {
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        });
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

// Delete Post
export const deletePost = async (dispatch, id, token) => {
    try {
        await axios.delete(getBaseURL + `api/blog/${id}`,{
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        });

        dispatch({
            type: DELETE_POST,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err.response.msg
        });
    }
};

export const updatePost = async (dispatch, post, token) => {
    try {
        const res = await axios.patch(getBaseURL + `api/blog/${post._id}`, post,{
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
        });
        dispatch({
            type: UPDATE_POST,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err.response.msg
        });
    }
};

export const setCurrentPost = (dispatch, post) => {
    dispatch({ type: SET_CURRENT_POST, payload: post });
};

export const clearCurrentPost = (dispatch) => {
    dispatch({ type: CLEAR_CURRENT_POST });
};

const PostState = (props) => {
    const initialState = {
        posts: [],
        current: null,
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

