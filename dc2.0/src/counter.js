import React from 'react';
import Button from './component/Button';
import PropTypes from 'prop-types';

const Counter = props => {

    return (
      <div className='counter'>
        <Button class="counter-action decrement" label='-' handleClick={() => props.updatePlayer( props.index, -1)}/>
        <div className='counter-score'> {props.score} </div>
        <Button class='counter-action increment' label='+' handleClick={() => props.updatePlayer( props.index, 1)}/>
      </div>
    );
};

Counter.propTypes = {
    score: PropTypes.number.isRequired,
    updatePlayer: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
};

export default Counter;
