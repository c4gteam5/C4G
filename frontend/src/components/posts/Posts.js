import { getPosts, usePosts } from "../../context/post/postState";
import React, { useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Posts = () => {
    const [postState, postDispatch] = usePosts();
    const { posts } = postState;
    useEffect(() => {
        getPosts(postDispatch);
    }, [postDispatch]);

    return (
        <Fragment>
            {posts !== null ? (
                <TransitionGroup>
                    posts.map((post) => (
                    <CSSTransition
                        key={post._id}
                        timeout={500}
                        classNames='item'
                    >
                        <ContactItem post={post} />
                    </CSSTransition>
                    ))
                </TransitionGroup>
            ) : (
                <Spinner />
            )}
        </Fragment>
    );
}

export default Posts;