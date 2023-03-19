import React, { useEffect, Fragment } from 'react';
import {getVolunteers, useVolunteers} from "../../context/volunteer/volunteerState";
import VolunteerItem from "./VolunteerItem";

const Volunteers = () => {
    const [volunteerState, volunteerDispatch] = useVolunteers();
    const { volunteers, filtered} = volunteerState;
    useEffect(() => {
        getVolunteers(volunteerDispatch);
    }, [volunteerDispatch]);

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