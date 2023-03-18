import { getPosts, usePosts } from "../../context/post/postState";
import React, { useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from "./PostItem";

const Posts = () => {
    const [postState, postDispatch] = usePosts();
    const { posts } = postState;
    useEffect(() => {
        getPosts(postDispatch);
    }, [postDispatch]);

    if (posts !== null && posts.length === 0) {
        return <h4>Please add a posts</h4>;
    }
    return (
        <Fragment>
            <h2>All previous posts</h2>
                <TransitionGroup>
                    {posts.map((post) => (
                    <CSSTransition
                        key={post._id}
                        timeout={500}
                        classNames='item'
                    >
                        <PostItem post={post} />
                    </CSSTransition>
                    ))}
                </TransitionGroup>
        </Fragment>
    );
}

export default Posts;