import {Fragment} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import PostForm from "../components/posts/PostForm";
import * as React from "react";
import Posts from "../components/posts/Posts";

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
            <Typography variant="h2" component="h1" gutterBottom>
                Post Management Portal
            </Typography>
            <Box width="100%" maxWidth={800} mt={4}>
                <Paper elevation={3} sx={{ padding: 4 }}>
                    <PostForm />
                </Paper>
            </Box>
                <Box width="100%" maxWidth={800} mt={4}>
                    <Posts />
                </Box>


            </Box>
    );
}
export default PostManagement;