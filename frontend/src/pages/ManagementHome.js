import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Container from "@mui/material/Container";
import Footer from "../components/utils/Footer";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLogout } from "../hooks/useLogout";

const ManagementHome = () => {
  const theme = createTheme();

  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          m={1}
          //margin
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Button
            onClick={handleLogout}
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
          >
            Logout
          </Button>
        </Box>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "80vh" }}
        >
          <Grid item>
            <div>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Button
                  component={Link}
                  to="/post-management"
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ minWidth: "300px", height: "80px" }}
                >
                  Post Manager
                </Button>
                <Button
                  component={Link}
                  to="/volunteer-management"
                  variant="outlined"
                  color="primary"
                  size="large"
                  style={{ minWidth: "300px", height: "80px" }}
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
