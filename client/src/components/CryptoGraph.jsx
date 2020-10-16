import React from 'react';
import Chart from 'chart.js';

const options = () => {
	return {
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
};

const data = (props, period) => {
	return {
		labels: props.dataToDisplay.map((d) => {
			//console.log(d.time_period_end);
			return d.time_period_end;
		}), //time
		datasets: [
			{
				label: `${period} Trades`,
				data: props.dataToDisplay.map((p) => {
					return p.price_close;
				}), //values
				fill: 'none',
				backgroundColor: 'orange',
				pointRadius: 2,
				borderColor: 'orange',
				borderWidth: 1,
				lineTension: 0,
			},
		],
	};
};

class CryptoGraph extends React.Component {
	constructor(props) {
		super(props);
		this.canvasRef = React.createRef();
	}

	componentDidMount() {
		this.myChart = new Chart(this.canvasRef.current, {
			type: 'line',
			options: options(),
			data: data(this.props, this.props.period),
		});
	}
	render() {
		return <canvas ref={this.canvasRef} />;
	}
}

export default CryptoGraph;
