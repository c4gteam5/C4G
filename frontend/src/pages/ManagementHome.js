import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import Container from '@mui/material/Container';
import Footer from '../components/utils/Footer';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ManagementHome = () => {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ minHeight: '80vh' }}
                >
                    <Grid item>
                        <div>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '20px',
                                }}
                            >
                                <Button
                                    component={Link}
                                    to="/post-management"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    style={{ minWidth: '300px', height: '80px' }}
                                >
                                    Post Manager
                                </Button>
                                <Button
                                    component={Link}
                                    to="/volunteer-management"
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    style={{ minWidth: '300px', height: '80px' }}
                                >
                                    Volunteer Manager
                                </Button>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Footer
                title="Cyient Foundation Management Portal - P5"
                description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."
            />
        </ThemeProvider>
    );
};

export default ManagementHome;
