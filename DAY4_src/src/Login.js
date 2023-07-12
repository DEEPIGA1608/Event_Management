import React, { Component } from 'react'
import axios from 'axios';
import "./Login1.css";
import { Link } from 'react-router-dom';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        email:'',
        password:''
    };
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };
   
  };

  render() {
    return (
      <>
      <div class="bg">
      <div class="boxout">
      <div class="box">
        <form onSubmit={this.handleSubmit}class="form">
          <h1 class="h1">Login</h1>
          <p>Name:
          <input
            class="name"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
            required/></p>
          <p>Email: 
          <input
            class="email"
            type="text"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          /></p>
          <p>Password:
          <input
            class="password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          /></p><br></br>
          <Link to="Home1"><button type="submit" class="g1">Log in</button></Link>
          <br></br>
          <h4>Don't have an account?<Link to="/Signup"> Sign up</Link></h4>
        </form>
        </div>
        </div>
        </div>
        </>
      );
  }
}
export default Login;
