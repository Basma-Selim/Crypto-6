import React, { Component } from 'react';
import './login.css';

 class Login extends Component {
    constructor(props) {
      super(props);
    }
    render() {
                 
         
      return (
          
        <div className="container" >
        <div className="card-wrap">
          <div className="card border-0 shadow card--welcome is-show" id="welcome">
            <div className="card-body">
              <h2 className="card-title">WELCOME</h2>
              <p>Welcome to the login page</p>
              <div className="btn-wrap"><a className="btn btn-lg btn-register js-btn" data-target="register">REGISTER</a><a className="btn btn-lg btn-login js-btn" data-target="login">LOGIN</a></div>
            </div>
          </div>
          <div className="card border-0 shadow card--register" id="register">
            <div className="card-body">
              <h2 className="card-title">Create Account</h2>
              <p className="card-text">Enter your personal details<br/>and start journey with us</p>
              <p className="badge-wrap"><a className="badge"><i className="fab fa-facebook-f"></i></a><a className="badge"><i className="fab fa-google"></i></a><a className="badge"><i className="fab fa-twitter"></i></a><a className="badge"><i className="fab fa-github"></i></a></p>
              <p>or use your email for registration</p>
              <form>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Name" required="required"/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email" required="required"/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" placeholder="Password" required="required"/>
                </div>
                <button className="btn btn-lg">REGISTER</button>
              </form>
            </div>
            <button className="btn btn-back js-btn" data-target="welcome"><i className="fas fa-angle-left"></i></button>
          </div>
          <div className="card border-0 shadow card--login" id="login">
            <div className="card-body">
              <h2 className="card-title">Welcome Back!</h2>
              <p>To keep connected with us<br/>please login with your personal info</p>
              <p className="badge-wrap"><a className="badge"><i className="fab fa-facebook-f"></i></a><a className="badge"><i className="fab fa-google"></i></a><a className="badge"><i className="fab fa-twitter"></i></a><a className="badge"><i className="fab fa-github"></i></a></p>
              <p>or use your account</p>
              <form>
                <div className="form-group">
                  <input className="form-control" type="email" placeholder="Email" required="required"/>
                </div>
                <div className="form-group">
                  <input className="form-control" type="password" placeholder="Password" required="required"/>
                </div>
                <p><a>Forgot your password?</a></p>
                <button className="btn btn-lg">LOGIN</button>
              </form>
            </div>
            <button className="btn btn-back js-btn" data-target="welcome"><i className="fas fa-angle-left"></i></button>
          </div>
        </div>
      </div>


    )
    }
  }
  

  export default Login;