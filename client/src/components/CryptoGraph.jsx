import React from 'react';
import Chart from 'chart.js';
import lastDayData from '../../../database/sample_data_1DAY';
import last10DaysData from '../../../database/sample_data_10DAYS';
import lastYearData from '../../../database/sample_data_1YEAR';
//import { Bar } from 'react-chartjs-2';
var options = {
	scales: {
		xAxes: [
			{
				type: 'time',
				time: {
					unit: 'month',
				},
			},
		],
	},
};

class CryptoGraph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.canvasRef = React.createRef();
	}
	componentDidMount() {
		var data = {
			labels: this.props.dataToDisplay.map((d) => d.time_period_end), //time
			datasets: [
				{
					label: 'Daily Trades',
					data: this.props.dataToDisplay.map((p) => p.price_close), //values
					fill: 'none',
					backgroundColor: 'orange',
					pointRadius: 2,
					borderColor: 'orange',
					borderWidth: 1,
					lineTension: 0,
				},
			],
		};

		this.myChart = new Chart(this.canvasRef.current, {
			type: 'line',
			options: options,
			data: data,
		});
	}
	render() {
		return <canvas ref={this.canvasRef} />;
	}
}

export default CryptoGraph;
