import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      loginErrors:""
 
    };
this.handleSubmit = this.handleChange.bind(this);
this.handleChange = this.handleChange.bind(this);
}
handleChange(event){
  this.setState({
    [event.target.name] : event.target.value
  });
}
handleSubmit(event){
  const {email,password}=this.state;
  axios
  .post(
    "http://localhost:3001.sessions",
    {
      user:{
        email:email,
        password:password,
       
      }
    },
   { withCredentials:true}
  )
  .then(response=>{
    if(response.data.logged_in){
      this.props.handleSuccessfulAuth(response.data);
    }
  })
  .catch(error=>{
    console.log("login error", error)
  });
  event.preventDefault();
}

render(){
  return(
    <div>
       <form onSubmit={this.handleSubmit}>
       <input className="input1" type="email" name="email" placeholder="Email" value = {this.state.email} onChange={this.handleChange}required/>
       <input className="input2" type="password" name="password" placeholder="Password" value = {this.state.password} onChange={this.handleChange}required/>
        <button className="login" type="submit">Login</button>
        </form>
    </div>
  );
}
}
