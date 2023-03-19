import React, { useEffect, Fragment } from 'react';
import {getVolunteers, useVolunteers} from "../../context/volunteer/volunteerState";
import VolunteerItem from "./VolunteerItem";

const Volunteers = () => {
    const [volunteerState, volunteerDispatch] = useVolunteers();
    const { volunteers } = volunteerState;
    useEffect(() => {
        getVolunteers(volunteerDispatch);
    }, [volunteerDispatch]);

    if (volunteers !== null && volunteers.length === 0) {
        return <h4>No volunteers yet</h4>;
    }
    return (
        <Fragment>
            <h2>Volunteers</h2>
            {volunteers.map((volunteer) => (
                <VolunteerItem key={volunteer._id} volunteer={volunteer} />
            ))}
        </Fragment>
    );
}

export default Volunteers;