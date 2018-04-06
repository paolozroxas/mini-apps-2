import React from 'react';
import CurrentPrice from './CurrentPrice.jsx';
import Chart from './Chart.jsx';
import Footer from './Footer.jsx';

var App = (props) => (
  <div className="main">
    <CurrentPrice />
    <Chart />
    <Footer />
  </div>
)

export default App;
