import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useVolunteers} from "../../context/volunteer/volunteerState";

const VolunteerItem = ({ volunteer }) => {
    const { firstName, lastName, email, phoneNumber, profession, interest } = volunteer;

    return (
        <Card sx={{ minWidth: 275, mb: 3 }}>
            <CardContent>
                <div>
                <Typography variant="body3">
                    Name: {firstName} {lastName}
                </Typography>
                </div>
                <div>
                <Typography variant="body3">
                    Email: {email}
                </Typography>
                </div>
                <div>
                <Typography variant="body3">
                    Phone Number: {phoneNumber}
                </Typography>
                </div>
                <div>
                <Typography variant="body3">
                    Profession: {profession}
                </Typography>
                </div>
                <div>
                <Typography variant="body3">
                    Interest: {interest}
                </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default VolunteerItem;