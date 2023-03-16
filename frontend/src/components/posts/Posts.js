import { getPosts, usePosts } from "../../context/post/postState";
import React, { useEffect } from 'react';

const Posts = () => {
    const [postState, postDispatch] = usePosts();
    const { posts } = postState;
    useEffect(() => {
        getPosts(postDispatch);
    }, [postDispatch]);

    return (
        <>
            <h1>Posts</h1>
            {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </>
    );
}

export default Posts;