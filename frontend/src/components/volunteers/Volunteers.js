import React, { useEffect, Fragment } from 'react';
import {getVolunteers, useVolunteers} from "../../context/volunteer/volunteerState";
import { useAuthContext } from '../../hooks/useAuthContext';
import VolunteerItem from "./VolunteerItem";

const Volunteers = () => {
    const [volunteerState, volunteerDispatch] = useVolunteers();
    const { volunteers, filtered} = volunteerState;
    const {user} = useAuthContext()
    useEffect(() => {
        getVolunteers(volunteerDispatch, user.token);
    }, [volunteerDispatch, user]);

    if (volunteers !== null && volunteers.length === 0) {
        return <h4>No volunteers yet</h4>;
    }
    return (
        <Fragment>
            <h1>Volunteers</h1>
                    {filtered !== null
                        ? filtered.map((volunteer) => (
                            <VolunteerItem key={volunteer._id} volunteer={volunteer} />
                        ))
                        : volunteers.map((volunteer) => (
                            <VolunteerItem key={volunteer._id} volunteer={volunteer} />
                        )
            )}
        </Fragment>
    );
}

export default Volunteers;