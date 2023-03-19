import axios from "axios";
import {GET_POSTS, GET_VOLUNTEERS, POST_ERROR} from "../types";
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
        console.log(res);
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

const VolunteerState = (props) => {
    const initialState = {
        volunteers: [],
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