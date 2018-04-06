import React from 'react';
import config from '../../config.js';

class CurrentPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPrice: 0
    }
  }

  componentDidMount() {
    this.createPriceSocket();
  }

  createPriceSocket() {
    var socket = new WebSocket(config.priceSocket);
    socket.onmessage = (message) => {
      var data = JSON.parse(message.data);
      if (data.type === 'ticker') {
        this.setState({ currentPrice: data.price });
      }
    }
    socket.onopen = () => {
      socket.send(config.socketSubscribe);
    }
  }

  render() {
    return (
      <div className="current-price-value">
        <div className="current-price-value">
          {Number(this.state.currentPrice).toFixed(2)}
        </div>
        <div className="current-price-currency">
          USD
        </div>
      </div>
    )
  }
}

export default CurrentPrice;
