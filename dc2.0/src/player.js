import React from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

const Player = props => {

    return (
      <div className='player'>
        <div className='player-name'
          onClick={() => props.selectPlayer(props.index)}>
          <a className='remove-player' onClick={() => props.removePlayer(props.index)}>✖</a>
          {props.name}
        </div>
        <div className='player-score'>
          <Counter score={props.score} updatePlayer={props.updatePlayer} index={props.index}/>
        </div>
      </div>
    );
};

Player.propTypes = {

    name : PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    score : PropTypes.number.isRequired,
    removePlayer : PropTypes.func.isRequired,
    updatePlayer : PropTypes.func.isRequired,
};

export default Player;
