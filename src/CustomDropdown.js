
import React, { Component } from 'react';
import './App.css'

export default class CustomDropdown extends React.Component{
render(){
return(
    <select value={this.props.selecteditem} onChange={this.props.onChange}>
        <option>{this.props.arr[0]}</option>
        <option>{this.props.arr[1]}</option>
        <option>{this.props.arr[2]}</option>
    </select>
)

}
}