import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="app-text">
          <br></br> <br></br> <h2> Buy and sell crypto currencies</h2>
          <p>
            Crypto 6 is the perfect place to buy, sell, and manage your<br></br>{' '}
            Cryptocurrency portfolio.
          </p>
        </div>
        <div>
          <li>
            <a
              
              //name="Registration"
              className="reg-btn"
             
            >
              <span  onClick={this.props.hundlePage} name="Registration">Click Here To Register</span>
            </a>
          </li>
        </div>
        {/* <div className="app-picture">
                   <img src="art.jpg"/>
                   </div> */}
        <div className="play-btn">
          <div className="play-btn-inner">
            <i className="fa fa-play"></i>
          </div>
          <h3 className="see">
            <a href="#">See Trading</a>
          </h3>
        </div>

        <div className="quick-links">
          <ul>
            <li>
              <i className="fa fa-share-alt"></i>
              <a href="#">
                <p>SHARE TO</p>
              </a>
            </li>
            <li>
              <i className="fa fa-audio-description"></i>
              <a href="#">
                <p>TRADING</p>
              </a>
            </li>
            <li>
              <i className="fa fa-cog"></i>
              <a href="#">
                <p>ANALYTICS</p>
              </a>
            </li>
            <li>
              <i className="fa fa-btc"></i>
              <a href="#">
                <p>WALLET</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="social-icons">
          <ul>
            <li>
              <a href="https://www.facebook.com/bennaser.basma/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
