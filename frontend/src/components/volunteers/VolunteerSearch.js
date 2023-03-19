import React from 'react';
import { clearVolunteer, searchVolunteer, useVolunteers } from '../../context/volunteer/volunteerState';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const VolunteerSearch = () => {
    const volunteerDispatch = useVolunteers()[1];

    const onChange = (e) => {
        if (e.target.value !== '') {
            searchVolunteer(volunteerDispatch, e.target.value);
        } else {
            clearVolunteer(volunteerDispatch);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={(e) => e.preventDefault()}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '20px',
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Search by name/profession/interest/phone..."
                onChange={onChange}
                sx={{
                    width: '50%',
                }}
            />
        </Box>
    );
};

export default VolunteerSearch;