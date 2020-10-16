import React from 'react';
import Chart from 'chart.js';
import historicalData from '../../../database/sample_data';
import { Bar } from 'react-chartjs-2';
var data = {
	labels: historicalData.map((d) => d.time_period_end), //time
	datasets: [
		{
			label: 'Daily Trades',
			data: historicalData.map((p) => p.price_close), //values
			fill: 'none',
			backgroundColor: 'green',
			pointRadius: 2,
			borderColor: 'red',
			borderWidth: 1,
			lineTension: 0,
		},
	],
};

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
		yAxes: [
			{
				ticks: {
					min: 0,
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
