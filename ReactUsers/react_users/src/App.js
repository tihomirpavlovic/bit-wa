import React from 'react';
import Header from "./app/partials/header.js"
import Footer from "./app/partials/footer.js"
import UserList from "./app/users/userList.js"

const App = (props) => {
  return (
      <div>
          <Header />

          <UserList />

          <Footer footerTitle = "BIT" />
      </div>
  )
}

export default App;
