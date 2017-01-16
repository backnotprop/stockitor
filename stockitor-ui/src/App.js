import React, { Component } from 'react';

import Chart from './containers/Chart';

class App extends Component {
  render() {
    return (
      <div className="App App-gradient">
        <div className="pure-g">
            <div className="pure-u-4-24 Menu">
            
            
            </div>
            <div className="pure-u-19-24">
              <div className="Data">

                <div className="Data-Chart">
                  <Chart />
                </div>

              </div>
            
            </div>
        </div>
      </div>
    );
  }
}

export default App;
