
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OptionList from '../optionlist/OptionList';
import TextField from '../forms/TextField';


import './css/style.css';

class ListView extends Component {

  render() {

    return (

      <div id="list" className="list flex flex--col">
          <TextField id='firstname' label='' type='text' placeholder='Search...'/>
        <div className="flex flex--justify flex--middle u-ph u-pb shadow-navigation">
          <div className="flex flex--row flex--middle">
            <span className="label u-mr--">Sort by</span>
            <OptionList items={[{key:"title", value: "Title"},{key:"subtitle", value: "Subtitle"},{key:"severity", value: "Severity"},{key:"Date", value: "Date"}]}/>
          </div>
        </div>

        <ul className="list-ui list-ui--small">
            <li id={'list'} className="list-ui__item pointer">
              <div className="flex flex--justify">
                <div className="flex flex--left">
                  <div className="text">
                    <div className="title flex__item">{'Mission Power Plant'}</div>
                    <div className="subtitle flex__item">{'Break-Fix'}</div>
                  </div>
                </div>
                <span className="info">{['IN PROGRESS']}</span>
              </div>

              <div className="flex flex--justify">
                <div className="flex flex--left">
                  <div className="text">
                    <div className="title flex__item">{'Mission Power Plant'}</div>
                    <div className="subtitle flex__item">{'Periodic Maintenance'}</div>
                  </div>
                </div>
                <span className="info">{['SCHEDULED']}</span>
              </div>
            </li>
        </ul>

      </div>
    );
  }
}

ListView.propTypes = {
  data: PropTypes.array
}

export default ListView;
