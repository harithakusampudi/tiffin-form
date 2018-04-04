import React, { Component } from 'react';
import './App.css';
import CustomDropdown from './CustomDropdown.js'

class login extends Component {
  // constructor(props){
  // super(props);
  //  this.state={selecteditem:"",selectedtype:"",selectedprice:""
  //  };
  //  this.handleChangeItem = this.handleChangeItem.bind(this);
  //  this.handleChangeType = this.handleChangeType.bind(this);
  //  this.handleChangePrice = this.handleChangePrice.bind(this);
  //  this.msg=this.msg.bind(this);
  // }
  // msg(event){
  //   event.preventDefault();
  //   alert("you have choosen" +this.state.selecteditem +this.state.selectedtype +"and its price is :" +this.state.selectedprice)
  // }
  // handleChangeItem(event) {
  //   this.setState({selecteditem: event.target.value});
  // }
  // handleChangeType(event) {
  //   this.setState({selectedtype: event.target.value});
  // }
  // handleChangePrice(event) {
  //   this.setState({selectedprice: event.target.value});
  // }
  render() {
    return (
      <div class="container">
      <p>login form</p>
      <CustomDropdown class={"input_box"} placeholder={"Username"}></CustomDropdown>
      <CustomDropdown class={"input_box"}placeholder={"Password"}></CustomDropdown>
      <button class="button_box"onClick={this.msg}>Login</button>
      <p>not Registered?<a href="/app">Register</a></p>
      </div>
     
    );
  }
}

export default login;
