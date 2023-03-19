import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PostForm from "../components/posts/PostForm";
import * as React from "react";
import Posts from "../components/posts/Posts";
import Footer from "../components/utils/Footer";

const PostManagement = () => {
    return (
            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            pt={5}
            pb={5}
            >
            <Box width="100%" maxWidth={800} mt={4}>
                <Paper elevation={3} sx={{ padding: 4 }}>
                    <PostForm />
                </Paper>
            </Box>
                <Box width="100%" maxWidth={800} mt={4}>
                    <Posts />
                </Box>
                <Footer
                    title="Cyient Foundation Management Portal - P5"
                    description="Cyient (Estd: 1991, NSE: CYIENT) is a global digital engineering and technology company."
                />

            </Box>
    );
}
export default PostManagement;