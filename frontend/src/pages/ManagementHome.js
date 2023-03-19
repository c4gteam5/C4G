import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Container from "@mui/material/Container";
import Footer from "../components/utils/Footer";
import {Link} from "react-router-dom";

const ManagementHome = () => {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <div>
                    <h1>Management Portal</h1>
                    <Link to="/post-management">
                        <button>Post Manager</button>
                    </Link>

                    <Link to="/volunteer-management">
                        <button>Volunteer Manager</button>
                    </Link>
                </div>
            </Container>
            <Footer
                title="Cyient Foundation Management Portal - P5"
                description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."
            />
        </ThemeProvider>
    );
};

export default ManagementHome;