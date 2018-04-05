import React, { Component } from 'react';
import './App.css';
import CustomDropdown from './CustomDropdown.js';
import {
  withRouter
} from "react-router-dom";



class App extends Component {
  constructor(props){
  super(props);
   this.msg=this.msg.bind(this);
   this.myFunction=this.myFunction.bind(this);
  }
  msg(event){
    event.preventDefault();
    // alert("you have choosen" +this.state.selecteditem +this.state.selectedtype +"and its price is :" +this.state.selectedprice)
    alert("Registration successfull")
  };

  myFunction() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div class="container">
      <div>
      <p class="form">Registration form</p>
      <CustomDropdown class={"input_box"} placeholder={"Username"}></CustomDropdown>
      <CustomDropdown class={"input_box"}placeholder={"Email Id"}></CustomDropdown>
      <CustomDropdown class={"input_box"}placeholder={"Password"}></CustomDropdown>
       <button class="button_box"onClick={this.msg}>Create</button>
       <p>Already registered? <button onClick={() => this.myFunction()}>Login</button></p>
      </div>
      </div>
     
    );
  }
  }
export default withRouter(App);