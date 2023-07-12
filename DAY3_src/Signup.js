import React, { Component } from 'react'
import axios from 'axios';
import "./Login1.css"
import { Link } from 'react-router-dom';
export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'',
        email:'',
        password:'',
        contact:''
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
  handleContactChange = (event) => {
    this.setState({ contact: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        contact: this.state.contact,
      };
      axios.post("http://127.0.01:8080/post",data)
  };

  render() {
    return (
      <>
      <div class="bg">
      <div class="boxout">
      <div class="box">
        <form onSubmit={this.handleSubmit}class="form">
          <h1 class name="h1">SIGN UP</h1>
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
          /></p>
          <p>Contact:
          <input
            class="password"
            type="telephone"
            value={this.state.contact}
            onChange={this.handleContactChange}
            required
          /></p>
          <Link to="/Home1"><button type="submit" class="g1">Create account</button></Link>
          <h4>Already have an account?<Link to="/Login">Log in</Link></h4>
        </form>
        </div>
</div></div>
        </>
      );
  }
}
export default Signup;
