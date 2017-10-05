import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from './actions/player';
import PropTypes from 'prop-types';
import Header from './header';
import Player from './player';
import AddPlayerForm from './add-player-form';
import PlayerDetail from './player-detail';

class DispatchConsole extends Component {

  static propTypes = {
    players: PropTypes.array.isRequired,
  };

  render() {
    const { dispatch, players, selectedPlayerIndex } = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayer = bindActionCreators(PlayerActionCreators.updatePlayer, dispatch);
    const selectPlayer = bindActionCreators(PlayerActionCreators.selectPlayer, dispatch);

    let selectedPlayer;
    if( selectedPlayerIndex !== -1 ) {
      selectedPlayer = players[selectedPlayerIndex];
    }

    const playerComponents = players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayer={updatePlayer}
        removePlayer={removePlayer}
        selectPlayer={selectPlayer}
      />
    ));
    return (
      <div className='scoreboard'>
        <Header players={players}/>
        <div className='players'>
            {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer}/>
        <div className='player-detail'>
          <PlayerDetail selectedPlayer={selectedPlayer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    players : state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  }
);

export default connect(mapStateToProps)(DispatchConsole);
