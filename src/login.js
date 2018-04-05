import React, { Component } from 'react';
import './App.css';
import CustomDropdown from './CustomDropdown.js'
import { withRouter} from 'react-router-dom'

class login extends Component {
  constructor(props){
    super(props);
    this.myFunction=this.myFunction.bind(this);
  }
  myFunction() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div class="container">
      <p>login form</p>
      <CustomDropdown class={"input_box"} placeholder={"Username"}></CustomDropdown>
      <CustomDropdown class={"input_box"}placeholder={"Password"}></CustomDropdown>
      <button class="button_box"onClick={this.msg}>Login</button>
      <p>Not registered?<button onClick={this.myFunction} >Register</button></p>
      </div>
     
    );
  }
}
export default withRouter(login);
