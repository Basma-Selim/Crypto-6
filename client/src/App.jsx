import React from 'react';
import ReactDOM from 'react-dom';
import CryptoGraph from './components/CryptoGraph.jsx';
import axios from 'axios';
import lastDayData from '../../database/sample_data_1DAYS.json';
import last10DaysData from '../../database/sample_data_10DAYS.json';
import lastYearData from '../../database/sample_data_365DAYS.json';
const periodSelector = {
	'1DAY': 1,
	'10DAYS': 10,
	'1YEAR': 365,
};
const internetDownPeriodSelector = {
	'1DAY': lastDayData,
	'10DAYS': last10DaysData,
	'1YEAR': lastYearData,
};
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataToDisplay: '',
			isDataUpdated: false,
			period: '',
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		let period = event.target.value;
		axios.patch(`/api/CryptoCurr/${periodSelector[period]}`).then((result) => {
			if (Array.isArray(result.data)) {
				this.setState({
					dataToDisplay: result.data,
					period: period,
				});
			} else {
				this.setState({
					dataToDisplay: internetDownPeriodSelector[period],
					period: period,
				});
			}
		});
	}
	componentDidMount() {
		axios.get('/api/CryptoCurr').then((result) => {
			if (Array.isArray(result.data)) {
				this.setState({
					dataToDisplay: result.data,
					isDataUpdated: true,
					period: '1DAY',
				});
			} else {
				this.setState({
					dataToDisplay: internetDownPeriodSelector['1DAY'],
					isDataUpdated: true,
					period: '1DAY',
				});
			}
		});
	}
	render() {
		return (
			<div>
				<h1>Crypto 6</h1>
				{this.state.isDataUpdated && (
					<CryptoGraph
						period={this.state.period}
						dataToDisplay={this.state.dataToDisplay}
						key={this.state.dataToDisplay[0].volume_traded}
					/>
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
