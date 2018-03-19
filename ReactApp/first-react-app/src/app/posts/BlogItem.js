import React from 'react';
import './BlogItem.css';

const BlogItem = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
  }

export default BlogItem;