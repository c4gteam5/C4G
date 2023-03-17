import React from 'react';
import PropTypes from 'prop-types';
import {
    usePosts
} from '../../context/post/postState';

const PostItem = ({ post }) => {
    // we just need the contact dispatch without state.
    const contactDispatch = usePosts()[1];

    const { _id, title, content, linkToPicture, createdAt } = post;

    const onDelete = () => {
        console.log("delete post");
    };

    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {title}{' '}
            </h3>
            <p>{content}</p>
            <p>
                <button
                    className='btn btn-dark btn-sm'
                    onClick={() => onDelete}
                >
                    Edit
                </button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>
                    Delete
                </button>
            </p>
        </div>
    );
};

PostItem.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostItem;
