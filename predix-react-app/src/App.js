import React, { Component } from 'react';
import './css/predix.css';

import ScheduleComponent from './components/ScheduleComponent';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected : '["schedule"]'
    }
  }

  onTabChange(e) {
    console.log('onTabChange(): ', e);
  }

  render() {

    return (
      <div>
        <px-branding-bar application-title="Dispatch Console 2.0"></px-branding-bar>
        <px-app-nav id="main-nav" slot="app-nav" selected-route={this.state.selected} selected-route-changed={this.onTabChange()}
          items='[{"label": "Schedule","path": "schedule","icon": "px-fea:calendar", "id": "schedule"}, {"label": "Map","id": "map","icon": "px-utl:map"}, {"label": "Crew Manager","path": "inbox","icon": "px-fea:users", "id": "inbox"}]'>
        </px-app-nav>

          <div>
            <ScheduleComponent/>
          </div>

      </div>
    );
  }
}

export default App;
