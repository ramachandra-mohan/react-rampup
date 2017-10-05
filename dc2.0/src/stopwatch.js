import React, { Component } from 'react';
import Button from './component/Button';

export default class Stopwatch extends Component {

  constructor(props) {
    super(props);

    this.state = { running : false, elapsedTime: 0, previousTime: 0 };

    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onTick = this.onTick.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  static get propTypes() {
    return {
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onTick() {
    if( this.state.running ) {
      var now = Date.now()
      this.setState( {running : true, previousTime: now, elapsedTime: this.state.elapsedTime + (now - this.state.previousTime) } );
    }
  }

  onReset() {
    this.setState( {running : this.state.running, previousTime: Date.now(), elapsedTime: 0 } );
  }

  onStart() {
    this.setState( {running : true, previousTime: Date.now() } );
  }

  onStop() {
    this.setState( {running : false } );
  }

  render() {
    return (
        <div className='stopwatch'>
          <h2>Stopwatch</h2>
          <div className='stopwatch-time'>{Math.floor( this.state.elapsedTime / 1000)}</div>
          { this.state.running ? <Button handleClick={this.onStop} label='Stop'/> : <Button handleClick={this.onStart} label='Start'/>}
          <Button label='Reset' handleClick={this.onReset}/>
        </div>
    );
  }
};
