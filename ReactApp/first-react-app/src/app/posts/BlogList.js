
import './BlogList.css';
import React from 'react';
import BlogItem from "./BlogItem.js";
import postsData from "../../posts.js"

const BlogList = (props) => {
    return (
        <div>{postsData.map(element => {
           return <BlogItem title={element.title} body={element.body} key={element.id}/>
        })}</div>
    )
  }

  export default BlogList;