import React, {Component} from 'react';
import 'flex.css/dist/data-flex.css';
import '../less/app.less';
import Menus from '../components/Menus';

class App extends Component {
  render() {
    return (
            <div className="warp" data-flex="dir:left">

              <Menus data-flex-box="0"></Menus>
              <div className="right-content" data-flex-box="1">
                right content
              </div>
            </div>
    );
  }
}

export default App;
