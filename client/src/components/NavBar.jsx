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
  
/* <div>
      <div className="navbar navbar-expand-md navbar-dark bg-dark mb-4" role="navigation">
      <a className="navbar-brand" href="#">
          <img src="" alt=""></img>
        </a>
      <a className="navbar-brand" href="home">Crypto 6</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                  <a className="nav-link" href="#">Price</a>
              </li>
             
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="dropdown1" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">Products</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown1">
                      <li className="dropdown-item"><a href="#" target="_blank"></a></li>
                      <li className="dropdown-item dropdown">
                          <a className="dropdown-toggle" id="dropdown1-1" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">Dropdown1.1</a>
                          <ul className="dropdown-menu" aria-labelledby="dropdown1-1">
                              <li className="dropdown-item"><a href="#">Action 1.1</a></li>
                              <li className="dropdown-item dropdown">
                                  <a className="dropdown-toggle" id="dropdown1-1-1" data-toggle="dropdown"
                                     aria-haspopup="true" aria-expanded="false">Dropdown1.1.1</a>
                                  <ul className="dropdown-menu" aria-labelledby="dropdown1-1-1">
                                      <li className="dropdown-item"><a target="_blank"
                                                                   href="http://www.google.com">Action 1.1.1 -
                                          Google</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="dropdown2" data-toggle="dropdown"
                     aria-haspopup="true" aria-expanded="false">About us</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown2">
                      <li className="dropdown-item"><a href="#">Action 2 A</a></li>
                      <li className="dropdown-item"><a href="#">Action 2 B</a></li>
                      <li className="dropdown-item"><a href="#">Action 2 C</a></li>
                      <li className="dropdown-item dropdown">
                          <a className="dropdown-toggle" id="dropdown2-1" data-toggle="dropdown"
                             aria-haspopup="true" aria-expanded="false">Dropdown2.1</a>
                          <ul className="dropdown-menu" aria-labelledby="dropdown2-1">
                              <li className="dropdown-item"><a href="#">Action 2.1 A</a></li>
                              <li className="dropdown-item"><a href="#">Action 2.1 B</a></li>
                              <li className="dropdown-item"><a href="#">Action 2.1 C</a></li>
                              <li className="dropdown-item dropdown">
                                  <a className="dropdown-toggle" id="dropdown2-1-1" data-toggle="dropdown"
                                     aria-haspopup="true" aria-expanded="false">Dropdown2.1.1</a>
                                  <ul className="dropdown-menu" aria-labelledby="dropdown2-1-1">
                                      <li className="dropdown-item"><a href="#">Action 2.1.1 A</a></li>
                                      <li className="dropdown-item"><a href="#">Action 2.1.1 B</a></li>
                                      <li className="dropdown-item"><a href="#">Action 2.1.1 C</a></li>
                                  </ul>
                              </li>
                              <li className="dropdown-item dropdown">
                                  <a className="dropdown-toggle" id="dropdown2-1-2" data-toggle="dropdown"
                                     aria-haspopup="true" aria-expanded="false">Dropdown2.1.2</a>
                                  <ul className="dropdown-menu" aria-labelledby="dropdown2-1-2">
                                      <li className="dropdown-item"><a href="#">Action 2.1.2 A</a></li>
                                      <li className="dropdown-item"><a href="#">Action 2.1.2 B</a></li>
                                      <li className="dropdown-item"><a href="#">Action 2.1.2 C</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul>
              </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
               <button type="button" name="Login" className="btn btn-outline-danger" onClick={this.props.hundlePage}>Login</button>{' '} 
                <button type="button" name="Start" className="btn btn-outline-success"onClick={this.props.hundlePage}>Start</button>{' '} 
          </form>
      </div>
  </div>
  <div className="first">
      <h2> Buy and sell crypto currencies</h2>

  <p>Coinbase is the perfect place to buy, sell, and manage your cryptocurrency portfolio.</p>
  </div>
  <div>
   
     </div>
 </div>
        */
       <div className="container">
       <div className="menu">
           <ul>
           <li className="logo"><img src="diamond.png"/></li>
               <li className="active">Home </li>
               <li href="#">Price </li>
               <li href="#">Products </li>
               <li href="#">About us </li>
               <li><a href="#" name="Login" className="signup-btn" onClick={this.changeViewMain}><span>Login</span></a> </li>
               {/* <button type="button"  className="btn btn-outline-danger" onClick={this.props.hundlePage}>Login</button>{' '}  */}
           </ul>
       </div>
       </div>
       
      
    );
  }
}
