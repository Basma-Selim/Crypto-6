import React from 'react';
import ReactDOM from 'react-dom';
import CryptoGraph from './components/CryptoGraph.jsx';
import axios from 'axios';
import lastDayData from '../../database/sample_data_1DAY';
import last10DaysData from '../../database/sample_data_10DAYS';
import lastYearData from '../../database/sample_data_1YEAR';
const periodSelector = {
	'1DAY': lastDayData,
	'10DAYS': last10DaysData,
	'1YEAR': lastYearData,
};
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataToDisplay: lastDayData,
			isDataUpdated: true,
			period: '1DAY',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		//console.log(event.target.value);
		this.setState({
			period: event.target.value,
			dataToDisplay: periodSelector[event.target.value],
		});
		//console.log(this.state.dataToDisplay);
	}
	componentDidMount() {
		/* 		axios.get('/api/CryptoCurr').then((data) => {
			console.log(data.data);
			this.setState({
				//dataToDisplay: data.data,
				isDataUpdated: true,
			});
		}); */
	}
	render() {
		return (
			<div>
				<h1>Crypto 6</h1>
				{this.state.isDataUpdated && (
					<CryptoGraph dataToDisplay={this.state.dataToDisplay} />
				)}

				<label>
					Pick your period time frame:
					<select value={this.state.period} onChange={this.handleChange}>
						<option value="1DAY">1 day</option>
						<option value="10DAYS">10 days</option>
						<option value="1YEAR">1 Year</option>
					</select>
				</label>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('CryptoCurr'));