import React, { useContext } from 'react';
import Plot from 'react-plotly.js';
import HealthContext from '../context/DetailsContext';

const TemperatureChart = (props) => {
  const healthData = useContext(HealthContext).detailData;

  const createChart = () => {
    const yAxis = [];
    const xAxis = [];

    for (let i = 0; i < healthData.length; i += 1) {
      const element = healthData[i];
      // If Mongo
      if ((element.currentMicroservice === props.service) && element.cpuTemperature) {
        yAxis.push(i);
        xAxis.push(element.cpuTemperature);
      }

      // If SQL
      if ((element.currentmicroservice === props.service) && element.cputemperature) {
        yAxis.push(i);
        xAxis.push(element.cputemperature);
      }
    }

    return (
      <Plot
        data = {[{
          type: 'scatter',
          fill: 'tozeroy',
          fillcolor: 'rgba(224, 62, 54, .4)',
          mode: 'none',
          x: yAxis,
          y: xAxis,
          name: 'CPU Temperature',
          showlegend: true
        }]}
        layout = {
          {
            height: 400,
            width: 400,
            font: {
              color: 'azure',
              size: 15
            },
            paper_bgcolor: '#8BA6B9',
            plot_bgcolor: '#8BA6B9',

            legend: {
              orientation: 'h',
              xanchor: 'center',
              x: .5
            },
            yaxis: {rangemode: 'nonnegative'}
          }
        }
      />
    )
  };

  return <div>{createChart()}</div>;
};

export default TemperatureChart;
