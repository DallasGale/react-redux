import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.incrementAsync = this.incrementAsync.bind(this);
  }

  incrementAsync() {
    setTimeout(
      this.props.onIncrement, 1000)
  }


  render() {

    const { value, onIncrement, onDecrement, incrementIfOdd } = this.props;

    return (
      <div>
        Clicked: # { value } times 
        <button onClick={ onIncrement }> + </button>
        <button onClick={ onDecrement }> - </button>
        <button onClick={ incrementIfOdd }> Increment if odd  </button>
        <button onClick={ this.incrementAsync }> Increment async </button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
}

export default Counter;
