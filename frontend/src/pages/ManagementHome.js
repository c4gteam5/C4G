import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Container from "@mui/material/Container";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";

const ManagementHome = () => {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">



            </Container>
            <Footer title="Cyient Foundation Management Portal - P5"/>
        </ThemeProvider>
    );
};

export default ManagementHome;