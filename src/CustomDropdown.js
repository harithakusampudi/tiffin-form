
import React, { Component } from 'react';
import './App.css';

export default class CustomDropdown extends React.Component{
render(){
return(
    <div>
    <input class={this.props.class} placeholder={this.props.placeholder}/><br />
    </div>
)

}
}