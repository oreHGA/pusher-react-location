import React, { Component } from 'react';
import './App.css';
import { ReactBingmaps } from 'react-bingmaps'

class App extends Component {
  static defaultProps = {
    center: [5.6219868, -0.1733074],
    pushPins: [
      {
        "location": [5.6219868, -0.1733074],
        "option": { color: "red", title: "Accra Mall", subTitle: "Your location" }
      }
    ],
    zoom: 11
  }

  render() {
    return (
      <ReactBingmaps
        bingmapKey="YOUR BING MAPS KEY"
        center={this.props.center}
        mapTypeId={"road"}
        zoom={15}
        pushPins={this.props.pushPins}
      >
      </ReactBingmaps>
    );
  }
}

export default App;
