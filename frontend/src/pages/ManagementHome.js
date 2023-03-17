import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Container from "@mui/material/Container";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import { usePosts } from "../context/post/postState";
import PostForm from "../components/posts/PostForm";
import Posts from "../components/posts/Posts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const ManagementHome = () => {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                    pt={5}
                    pb={5}
                >
                    <Typography variant="h2" component="h1" gutterBottom>
                        Management Portal
                    </Typography>
                    <Box width="100%" maxWidth={600} mt={4}>
                        <Paper elevation={3} sx={{ padding: 4 }}>
                            <PostForm />
                        </Paper>
                    </Box>

                    <Box width="100%" maxWidth={800} mt={4}>
                        <Posts />
                    </Box>
                </Box>
            </Container>
            <Footer
                title="Cyient Foundation Management Portal - P5"
                description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."
            />
        </ThemeProvider>
    );
};

export default ManagementHome;