import React from 'react';
import Chart from 'chart.js';

var options = {
	scales: {
		xAxes: [
			{
				type: 'time',
				time: {
					unit: 'days',
				},
			},
		],
	},
};

class CryptoGraph extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.dataToDisplay[0]);
		this.canvasRef = React.createRef();
	}
	componentDidMount() {
		var data = {
			labels: this.props.dataToDisplay.map((d) => {
				//console.log(d.time_period_end);
				d.time_period_end;
			}), //time
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
