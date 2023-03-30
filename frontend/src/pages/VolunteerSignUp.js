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
import { Alert } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";


// ~~~ Pages ~~~ //
import Footer from '../components/utils/Footer';

const theme = createTheme();

// https://github.com/pheezx/Next-with-Magic-Link-Auth/blob/master/pages/login.jsx


export default function SignUp() {

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const postVolunteer = async ({ firstName, lastName,email,phoneNumber,profession,interest}) => {
    try{
      setIsLoading(true);
      setError(null);

      const res = await axios.post(
        "https://c4g-backend-2.onrender.com/api/volunteers/signup",
        { firstName, lastName,email,phoneNumber,profession,interest },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if(res){
        alert("form submitted successfully")
        setIsLoading(false);
        navigate("/")

      }

    }catch(err){
      setIsLoading(false);
      if(err.response.data.message.errors.phoneNumber){
        setError("invalid phone number");
      }else{
        setError(JSON.stringify(err.response.data.message));

      }
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
              disabled={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {error && (
              <Alert severity="error">{`Error: ${error}`}</Alert>
            )}
            <Grid container justifyContent="flex-end">
              
            </Grid>
          </Box>
        </Box>
		<Footer title="Cyient Foundation - P5" description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."/>
      </Container>
    </ThemeProvider>
  );
}