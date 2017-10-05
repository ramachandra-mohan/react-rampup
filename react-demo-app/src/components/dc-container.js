import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import Header from './Header';
import DCScheduler from './dcscheduler';
import ResourceMap from './resource-map';
import CrewManager from './crew-manager';
import ResourceList from '../data/resources';
import CrewManagerReducer from '../reducers/crew-manager';

const DCContainer = () => {

  let resources = ResourceList.map((resource) => {
    return (
      <div className="list-group-item" key={resource.name} style={{ 'textAlign': 'left'}}>
        <h5><img className="course-img" src={resource.img_src} alt="course" />
          {resource.name}</h5>
          <small>{resource.skills}</small>
      </div>
    );
  });

  const store = createStore( CrewManagerReducer );

  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Route exact path="/" render={ () => <DCScheduler resources={resources}/> } />
        <Route path="/resource-map" render={ () => <ResourceMap /> } />
        <Route path="/crew_manager" render={
          () => <Provider store={store}>
                  <CrewManager resources={resources}/>
                </Provider>
          }/>
      </div>
    </BrowserRouter>
  );

}

export default DCContainer;
