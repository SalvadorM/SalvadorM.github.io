import React from 'react';

//router
import { Route, Switch } from 'react-router-dom'

//components 
import NavBar from './navbar/NavBar'
import LandingScene from './landing/LandingScene'
import WorkScene from './work-components/WorkScene'
import WorkSceneTwo from './layout2/work-components2/WorkSceneTwo'
import LandingSceneTwo from './layout2/landing2/index'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route exact path="/" component={LandingScene} />
        <Route exact path="/layout2" component={LandingSceneTwo} />
        <Route exact path="/work" component={WorkScene}/>
      </Switch>
    </div>
  );
}

export default App;
