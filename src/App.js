import React from 'react';

//router
import { Route, Switch } from 'react-router-dom'

//components 
import NavBar from './navbar/NavBar'
import LandingScene from './landing/LandingScene'
import WorkScene from './work-components/WorkScene'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={LandingScene} />
        <Route exact path="/work" component={WorkScene}/>
      </Switch>

    </div>
  );
}

export default App;
