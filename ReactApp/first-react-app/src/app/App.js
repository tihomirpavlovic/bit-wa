import React from 'react';
import './App.css';
import Header from "./partials/Header.js";
import BlogList from "./posts/BlogList.js";


const App = (props) => {
  return (
      <div>
          <Header />
          <BlogList />
      </div>
  )
}

export default App;
