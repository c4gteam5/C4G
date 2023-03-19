import axios from "axios";
import {CLEAR_VOLUNTEER, GET_POSTS, GET_VOLUNTEERS, POST_ERROR, SEARCH_VOLUNTEER} from "../types";
import React, {useContext, useReducer} from "react";
import PostContext from "../post/postContext";
import VolunteerContext from "./volunteerContext";
import postReducer from "../post/postReducer";
import volunteerReducer from "./volunteerReducer";

export const useVolunteers = () => {
    const { state, dispatch } = useContext(VolunteerContext);
    return [state, dispatch];
};
export const getVolunteers = async (dispatch) => {
    try {
        const res = await axios.get("/api/volunteers/getall");
        dispatch({
            type: GET_VOLUNTEERS,
            payload: res.data.volunteers
        });
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: err.response
        });
    }
};

export const searchVolunteer = (dispatch, text) => {
    dispatch({ type: SEARCH_VOLUNTEER, payload: text });
};

export const clearVolunteer = (dispatch) => {
    dispatch({ type: CLEAR_VOLUNTEER });
};

const VolunteerState = (props) => {
    const initialState = {
        volunteers: [],
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(volunteerReducer, initialState);

    return (
        <VolunteerContext.Provider value={{ state: state, dispatch }}>
            {props.children}
        </VolunteerContext.Provider>
    );
};

export default VolunteerState;