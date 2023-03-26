// ~~~ React Libraries ~~~ //
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm, Controller } from "react-hook-form";

// ~~~ Pages ~~~ //
import Footer from '../components/utils/Footer';

const theme = createTheme();

// https://github.com/pheezx/Next-with-Magic-Link-Auth/blob/master/pages/login.jsx


export default function SignUp() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postVolunteer = async ({ firstName, lastName,email,phoneNumber,profession,interest}) => {
    const res = await fetch("https://c4g-backend-2.onrender.com/api/volunteers/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName,email,phoneNumber,profession,interest }),
    });
    if (res.status === 201) {
      // redirect
      alert("form submitted successfully")
    } else {
      // display an error
      alert("something went wrong")
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit(postVolunteer)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={!!errors?.firstName}
                  helperText={errors?.firstName ? errors.firstName.message : null}
                  {...register('firstName', { required: "First name is required" })}
                  
                />


              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={!!errors?.lastName}
                  helperText={errors?.lastName ? errors.lastName.message : null}
                  {...register('lastName', { required: "Last name is required" })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Required field",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phoneNumber"
                  label="Phone Number"
                  type="tel"
                  id="phoneNumber"
                  autoComplete="phoneNumber"
                  helperText={errors?.phoneNumber ? errors.phoneNumber.message : null}
                  {...register('phoneNumber', { required: "Phone Number is required" })}
                  error={!!errors?.phoneNumber}
                />
              </Grid>
             <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="profession"
                  label="Profession"
                  type="text"
                  id="profession"
                  autoComplete="profession"
                  helperText={errors?.profession ? errors.profession.message : null}
                  {...register('profession', { required: "Profession is required" })}
                  error={!!errors?.profession}
                  
                />
              </Grid>
               <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="interest"
                  label="Interest"
                  type="text"
                  id="interest"
                  autoComplete="interest"
                  helperText={errors?.interest ? errors.interest.message : null}
                  {...register('interest', { required: "Interest is required" })}
                  error={!!errors?.interest}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
		<Footer title="Cyient Foundation - P5" description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."/>
      </Container>
    </ThemeProvider>
  );
}