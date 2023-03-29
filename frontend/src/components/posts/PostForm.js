import {
    addPost,
    clearCurrentPost,
    updatePost,
    usePosts,
} from '../../context/post/postState';
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAuthContext } from '../../hooks/useAuthContext';

const initialPost = {
    title: '',
    content: '',
    linkToPicture: '',
    createdAt: Date.now(),
};

const PostForm = () => {
    const [postState, postDispatch] = usePosts();

    const { current } = postState;
    const [post, setPost] = useState(initialPost);
    const {user} = useAuthContext()

    useEffect(() => {
        if (current !== null) {
            setPost(current);
        } else {
            setPost(initialPost);
        }
    }, [current]);

    const { title, content } = post;

    const onChange = (e) =>
        setPost({ ...post, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if (current === null) {
            addPost(post, postDispatch, user.token).then(() => setPost(initialPost));
        } else {
            updatePost(postDispatch, post, user.token);
        }
        clearCurrentPost(postDispatch);
    };

    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
            }}
        >
            <Typography variant="h5" component="h2">
                {current ? 'Edit' : 'Create'} Post
            </Typography>
            <TextField
                variant="outlined"
                placeholder="Title"
                name="title"
                value={title}
                onChange={onChange}
                fullWidth
            />
            <TextField
                variant="outlined"
                placeholder="Content"
                name="content"
                value={content}
                onChange={onChange}
                fullWidth
                multiline
                minRows={4}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
            >
                {current ? 'Update Post' : 'Create Post'}
            </Button>
        </Box>
    );
};

export default PostForm;
