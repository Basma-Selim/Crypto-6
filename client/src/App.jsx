import React from 'react';
import ReactDOM from 'react-dom';
import CryptoGraph from './components/CryptoGraph.jsx';
import axios from 'axios';
import $ from 'jquery';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dataToDisplay: '' };
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(){
		axios.get('/api/CryptoCurr').then((data) => {
			console.log('data recieved')
			this.setState({
				dataToDisplay: data.data,
			});
			//console.log(this.state.dataToDisplay);
		});
	}
	componentDidMount() {
	/* 	let options = {
			method: 'get',
			url: '/api/CryptoCurr',
		};
		 	axios.get('/api/CryptoCurr').then((data) => {
			console.log('data recieved')
			this.setState({
				dataToDisplay: data.data,
			});
			//console.log(this.state.dataToDisplay);
		}); 
		$.ajax({
			url: '/api/CryptoCurr',
			type: 'get',
		})
			.done(function (server_data) {
				console.log('success' + server_data);
				//Once you have success, use jQuery to display server data
			})
			
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log('fail' + errorThrown);
			}); */
	}
	render() {
		return (
			<div>
				<h1>Crypto 6</h1>
				{/* <CryptoGraph /> */}
				<button onClick={this.handleClick}>Get request</button>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('CryptoCurr'));
