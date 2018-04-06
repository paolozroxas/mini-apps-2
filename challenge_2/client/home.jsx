import React from 'react';

var Home = (props) => {
  return (
    <div className='home'>
      <div className='next-button' onClick={props.changeForm}>Checkout</div>
    </div>
  )
}

export default Home;
