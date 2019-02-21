import React, { Component } from 'react';
import Image from './puce.jpg';
import logo from './credit.jpg';
import './form.css'
const formalizeHolder = (input) =>{
   var max =input.length ;
   if (max > 20){
      input = input.slice(0 ,20) 
   }
  return input.toUpperCase() 
}
const formalizeThru =(input) =>{
  
    var test = input.replace(/\D/gi, "").split('');
    test.splice(2, 0, '/')
    var res = test.join('')
    var maxi =res.length ;
    if (maxi == 5)
    {return res} else {return res.slice(0,5)}
     //((res.slice(0 ,2)<=12)&&(res.slice(3 ,5)<=30) ? res : alert ("non valid") )
    //(test.lenght == 5 ? test.join('') : alert ("non valid") )
    //test.join('')
    //test.length <= 1 ? '' : test.join('')
    //(test.lenght == 5 ? test.join('') : alert ("non valid") ) //
    
    }

const formalizeNumber =(input) =>{
input= input.replace(/\D/gi, "")
    var height = input.length ;
    if (height == 16)
{return input} else {return input.slice(0,16)}
}
class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      holder :'',
      thru :'',
      number :''


    }
  }

  
  render() {
    return (
      <div className="container">

          <div className ="card">
              <h1 className="titre">credit cart</h1>
              <div className="puce">
                  <img src={Image}></img>
                  <div className="code">
                      <h1>{this.state.number} </h1>
                  </div> 
                  <div className="footer">
                      <div className="name">
                        <h2>{this.state.holder} </h2>
                      </div>
                      <div className="date">
                        <h2>{this.state.thru} </h2>
                      </div>
                  </div> 
              </div>
          </div>
          <div className="input">
          <label for="name">Card Number :</label><br/>
              <input type="text" id="number" value={this.state.number}
              onChange={(e) =>this.setState({
              number: formalizeNumber(e.target.value)})}/><br/>
          <label for="name">Name on card :</label><br/>
              <input type="text" id="holder"  value={this.state.holder} onChange={(e) => this.setState({
              holder : formalizeHolder(e.target.value)
              })}/><br/>
          <label for="name">Valid Through:</label><br/>
              <input type="text" id="thru"  value={this.state.thru}  onChange={(e) => this.setState({
              thru : formalizeThru(e.target.value)})}/><br/>

          </div>
      </div>
    );
  }
}

export default Form;
