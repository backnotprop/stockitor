import React, { Component } from 'react';

import { 
  VictoryLine, 
  VictoryChart,
  VictoryArea,
  VictoryAxis 
} from 'victory';

class Chart extends Component {

  
  render() {
    const data = [
      {quarter: 1, earnings: 9000},
      {quarter: 2, earnings: 12345},
      {quarter: 3, earnings: 6987},
      {quarter: 4, earnings: 12467},
      {quarter: 5, earnings: 10928},
      {quarter: 6, earnings: 16500},
      {quarter: 7, earnings: 14250},
      {quarter: 8, earnings: 21456}
    ];

    const 
      frg = "linen",
      prm = "#7FDBFF"

    return (
        <VictoryChart >

          <VictoryLine
            data={data}
            x="quarter"
            y="earnings"
            style={{
              data: {
                stroke: prm,
                strokeWidth: 2
              },
            }}
          />

          <VictoryAxis
            tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4","Quarter 5", "Quarter 6", "Quarter 7", "Quarter 8"]}
            style={{
              axis: {stroke: frg},
              tickLabels: {fontSize: 4, padding: 5, fill: frg}
            }}
          />
          
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
            style={{
              axis: {stroke: frg},
              tickLabels: {fontSize: 4, padding: 5, fill: frg}
            }}
          />

        </VictoryChart> 
    );
  }
}

export default Chart;
