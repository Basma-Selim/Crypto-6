import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CryptoGraph from './components/CryptoGraph.jsx';
import ConnexionStart from './components/ConnexionStart.jsx';
import Home from './components/Home.jsx';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import Start from './components/Start.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			view:"Home"
		};
		this.hundlePage=this.hundlePage.bind(this)
	}

	hundlePage(e){
		this.setState({view: e.target.name})
	}

	render(){

		let render
		switch(this.state.view){
			case "Home" : render = <Home/>;break;
			case "Login" : render = <Login/>;break;
			case "Start" : render = <Start/>;break;
			case "CryptoGraph": render = <CryptoGraph/>;break;
		}

		return(
			<div>
			<NavBar hundlePage={this.hundlePage}/>
			{render}
			</div>
			
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
