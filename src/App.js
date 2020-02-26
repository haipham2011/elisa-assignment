import React from "react";
import Menu from "./components/menu";
import Channel from "./components/channel";
import ChannelSingle from "./components/channel/ChannelSingle";
import Program from "./components/program";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <div>
          <Switch>
            <Route exact path="/" render={() => <Channel />} />
            <Route path="/program" render={() => <Program />} />
            <Route path="/channels/:id" render={(props) => <ChannelSingle {...props}/>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
