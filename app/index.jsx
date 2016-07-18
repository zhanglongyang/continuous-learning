import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p>Let's Continuous Learning!</p>;
  }
}

render(<App/>, document.getElementById('app'));
