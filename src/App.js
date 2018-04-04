import React, { Component } from 'react';
import './App.css';
import CustomDropdown from './CustomDropdown.js'

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
    console.log("PROPS",this.props)
    return (
      <div class="container">
        <div>
      <p>Tiffin section</p>
      <label>Item:
       <CustomDropdown arr={["dosa","idly","vada"]} value={this.state.selecteditem} onChange={this.handleChangeItem}>
        </CustomDropdown ></label><br/><br/>
       <label>Type:
       <CustomDropdown arr={["panneer","butter","cheese"]} value={this.state.selecteditype} onChange={this.handleChangeType}>
       </CustomDropdown >
      </label><br/><br/>
       <label>Price:
       <CustomDropdown arr={["50-100","100-200","200-300"]}value={this.state.selectedprice} onChange={this.handleChangePrice}>
       </CustomDropdown ></label><br/><br/>
         <button onClick={this.msg}>done</button>
      </div>
      </div>
     
    );
  }
}

export default App;
