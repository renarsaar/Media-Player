import React from "react";

import { connect } from "react-redux";
import { fetchVideos } from "../components/actions";

// const App = () => {
//   return <div className="myapp">App</div>;
// };

class App extends React.Component {
  componentDidMount(props) {
    this.props.fetchVideos();
    // console.log(this.props);
  }

  render() {
    console.log(this.props);

    return <div>App</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    videos: Object.values(state.videos),
  };
};

export default connect(mapStateToProps, { fetchVideos })(App);
