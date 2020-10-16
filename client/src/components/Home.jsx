import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
           <div>
                    <div className="app-text">
                  <br></br> <br></br> <h2> Buy and sell crypto currencies</h2>
                    <p>Coinbase is the perfect place to buy, sell, and manage your Cryptocurrency portfolio.</p>
                   </div>
                   {/* <div className="app-picture">
                   <img src="art.jpg"/>
                   </div> */}
                    <div className="play-btn">
                        <div className="play-btn-inner"><i className="fa fa-play"></i></div>
                        <small><b>Click here to see the trading</b></small>
                    </div>

                   <div className="quick-links">
                       <ul>
                           <li><i className="fa fa-share-alt"></i><p>SHARE TO</p></li>
                           <li><i className="fa fa-audio-description"></i><p>TRADING</p></li>
                           <li><i className="fa fa-cog"></i><p>ANALYTICS</p></li>
                           <li><i className="fa fa-btc"></i><p>WALLET</p></li>

                       </ul>
                   </div>
                  
                   <div className="social-icons">
                       <ul>
                           <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                           <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                           <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                           <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                       </ul>

                   </div>
                </div>

        )
    }
}
