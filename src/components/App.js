import React from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

import VideoPlayer from "./VideoPlayer";
import MusicPlayer from "./MusicPlayer";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/player/" exact component={VideoPlayer} />
      <Route path="/player/music" exact component={MusicPlayer} />
      <Redirect to="/player/" />
    </BrowserRouter>
  );
};

export default App;
