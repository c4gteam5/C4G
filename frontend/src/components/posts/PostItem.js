import React from 'react';
import {clearCurrentPost, deletePost, usePosts, setCurrentPost} from '../../context/post/postState';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PostItem = ({ post }) => {
    const postDispatch = usePosts()[1];

    const { _id, title, content } = post;

    const onDelete = () => {
        deletePost(postDispatch, _id);
        clearCurrentPost(postDispatch);
    };

    return (
        <Card sx={{ minWidth: 275, mb: 3 }}>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" color="primary" onClick={() => setCurrentPost(postDispatch, post)}>
                    Edit
                </Button>
                <Box ml={1}>
                    <Button size="small" variant="contained" color="error" onClick={onDelete}>
                        Delete
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default PostItem;