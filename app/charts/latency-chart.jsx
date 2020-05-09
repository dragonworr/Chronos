import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import HealthContext from '../context/DetailsContext';
import Plot from 'react-plotly.js';

const LatencyChart = (props) =>  {
  const healthData = useContext(HealthContext).detailData;
  const createChart = () => {
    const xAxis = [];
    const yAxis = [];
    for (let i = 0; i < healthData.length; i++) {
      const element = healthData[i];
      if (element.currentmicroservice === props.service || element.currentMicroservice === props.service) {
        xAxis.push(i);
        yAxis.push(element.latency);
      }
    }

    return (
      <Plot
        data = {[{
          type: 'scatter',
          x: xAxis,
          y: yAxis,
          mode: 'lines',
          rangemode: 'nonnegative',
          name: `${props.service} CPU Latency`,
          marker: {
              color: '#155263',
              size: 1
          }
        }]}
        layout = {{
          width: 500,
          height: 500,
          paper_bgcolor: '#fffbe0',
          plot_bgcolor: '#fffbe0',
          showlegend: true
        }}
      />
    )};

  return <div>{createChart()}</div>;
};

export default LatencyChart;
