import React, {Component} from 'react';
import '../less/App.less';
import Menus from '../components/Menus';

class App extends Component {
  render() {
    return (
            <div className="App">

              <Menus></Menus>
            </div>
    );
  }
}

export default App;
