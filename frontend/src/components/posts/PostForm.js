import {addPost, usePosts} from "../../context/post/postState";
import React, { useState, useEffect } from 'react';

const initialPost = {
    title: "",
    content: "",
    linkToPicture: "",
    createdAt: Date.now()
};

const PostForm = () => {
    const [postState, postDispatch] = usePosts();

    const { current } = postState;
    const initialPostValue = current !== null ? current : initialPost;
    const [post, setPost] = useState(initialPostValue);

    useEffect(() => {
        if (current !== null) {
            setPost(current);
        } else {
            setPost(initialPost);
        }
    }, [current]);

    const { title = "", content = "", linkToPicture = "", createdAt = Date.now() } = post || {};

    const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        if (current === undefined) {
            addPost(postDispatch, post).then(() => { setPost(initialPost);});
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>
                New Post
            </h2>
            <input
                type='text'
                placeholder='Title'
                name='title'
                value={title}
                onChange={onChange}
            />
            <input
                type='text'
                placeholder='Content'
                name='content'
                value={content}
                onChange={onChange}
            />
            <div>
                <input
                    type='submit'
                    value={'Create'}
                    className='btn btn-primary btn-block'
                />
            </div>
        </form>
    );
};

export default PostForm;