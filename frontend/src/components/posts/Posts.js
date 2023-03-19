import { getPosts, usePosts } from "../../context/post/postState";
import React, { useEffect, Fragment } from 'react';
import PostItem from "./PostItem";

const Posts = () => {
    const [postState, postDispatch] = usePosts();
    const { posts } = postState;
    useEffect(() => {
        getPosts(postDispatch);
    }, [postDispatch]);

    if (posts !== null && posts.length === 0) {
        return <h4>Please add a post</h4>;
    }
    return (
        <Fragment>
            <h2>Previous posts</h2>
            {posts.map((post) => (
                <PostItem key={post._id} post={post} />
            ))}
        </Fragment>
    );
}

export default Posts;