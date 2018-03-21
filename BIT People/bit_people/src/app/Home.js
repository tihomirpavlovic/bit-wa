import React, { Component } from 'react';
import Header from "./partials/Header";
import { userService } from "../services/UserService";
import UserList from "./users/UserList";
import UserGrid from "./users/UserGrid";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showGrid: true
    }
  }

  componentDidMount() {
    this.refreshUsers();
  }

  refreshUsers = () => {
    userService.fetchUsers()
      .then((userData) => {
        this.setState({
          users: userData
        })
      })
  }

  changeView = () => {
    this.setState((prevState) => {
      return {
        showGrid: !prevState.showGrid
      }
    })
  }

  refreshPage = () => {
    this.refreshUsers();
  }

  // searchUser = ()=>{
  //   this.state.users.filter(element => element.name.first == this.state.searchedTerm)
  // }

  render() {
    return (
      <div className="App">
        <Header icon={this.state.showGrid} refresh={this.refreshPage} changeView={this.changeView} location={this.props.match.path}/>
        {this.state.showGrid ? <UserGrid userData={this.state.users} /> : <UserList userData={this.state.users} />}
      </div>
    );
  }
}

export default Home;
