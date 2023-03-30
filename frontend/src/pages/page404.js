// ~~~ React Libraries ~~~ //
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";
// ~~~ Pages ~~~ //
import Footer from "../components/utils/Footer";
import { Link } from "react-router-dom";

const theme = createTheme();

// https://github.com/pheezx/Next-with-Magic-Link-Auth/blob/master/pages/login.jsx

export default function page404() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <br />
        <br />
        <br />
        <br />
        <center>
          <h1>Page Not Found</h1>
          <h3>Hmmm... Looks like you're lost.</h3>
          <Button variant="contained" component={Link} to={"/"}>
            Let's go back home
          </Button>
        </center>
        <br />
        <br />
        <br />
        <br />
        <Footer
          title="Cyient Foundation - P5"
          description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."
        />
      </Container>
    </ThemeProvider>
  );
}
