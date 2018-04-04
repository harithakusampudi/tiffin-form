import React, { Component } from 'react';
import './App.css';
import CustomDropdown from './CustomDropdown.js';
import {browserHistory}from 'react-router'


class App extends Component {
  constructor(props){
  super(props);
   this.state={selecteditem:"",selectedtype:"",selectedprice:""
   };
   this.handleChangeItem = this.handleChangeItem.bind(this);
   this.handleChangeType = this.handleChangeType.bind(this);
   this.handleChangePrice = this.handleChangePrice.bind(this);
   this.msg=this.msg.bind(this);
  }
  msg(event){
    event.preventDefault();
    alert("you have choosen" +this.state.selecteditem +this.state.selectedtype +"and its price is :" +this.state.selectedprice)
  }
  handleChangeItem(event) {
    this.setState({selecteditem: event.target.value});
  }
  handleChangeType(event) {
    this.setState({selectedtype: event.target.value});
  }
  handleChangePrice(event) {
    this.setState({selectedprice: event.target.value});
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
       <p>Already registered?<button onClick={browserHistory.push('/login') }>Login</button></p>
      </div>
      </div>
     
    );
  }
}

export default App;
