import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import VideoPlayer from "./VideoPlayer";
import MusicPlayer from "./MusicPlayer";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/videos" exact component={VideoPlayer} />
      <Route path="/music" exact component={MusicPlayer} />
    </BrowserRouter>
  );
};

export default App;
