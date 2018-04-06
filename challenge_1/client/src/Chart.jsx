import React from 'react';
import { Line } from 'react-chartjs-2';
import _ from 'underscore';
import axios from 'axios';
import config from '../../config.js';

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: []
    };
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    axios.get(config.server)
      .then((result) => {
        var prices = result.data;
        this.setState({ prices });
        console.log(prices);
      }).catch((err) => console.error(err));
  }

  render() {
    var data = {
      labels: _.map(this.state.prices, (price) => {
        return price.time;
      }),
      datasets: [{
        label: "ETH",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: _.map(this.state.prices, (price) => {
          return price.price;
        }),
      }]
    }
    return (
      <div className="chart">
        <Line data={data} />
      </div>
    );
  }
}

export default Chart;
