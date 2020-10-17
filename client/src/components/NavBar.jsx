import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state={
        view: false
    }
    this.changeViewMain = this.changeViewMain.bind(this)
  }
  changeViewMain(){
      this.setState({view: !this.state.view})
      this.props.changeView(this.state.view)
  }
  render() {
    return (
  
       <div className="container">
       <div className="menu">
           <ul>
           <li className="logo"><img src="diamond.png"/></li>
               <li  className="active"><a href="http://localhost:3000/">Home</a></li>
               {/* <li><a href="#">Price</a></li>
               <li href="#">Products </li> */}
               <li> <a href="#"  name="AboutUs" onClick={this.changeViewMain}>About us</a></li>
               <li><a href="#" name="Login" className="signup-btn" onClick={this.changeViewMain}><span>Login</span></a> </li>
               

              
           </ul>
       </div>
       </div>
       
      
    );
  }
}
