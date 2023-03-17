import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Container from "@mui/material/Container";
import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import { usePosts } from "../context/post/postState";
import PostForm from "../components/posts/PostForm";
import Posts from "../components/posts/Posts"

const ManagementHome = () => {
    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">

                    <PostForm />

                <Posts />

            </Container>
            <Footer title="Cyient Foundation Management Portal - P5" description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."/>
        </ThemeProvider>
    );
};

export default ManagementHome;