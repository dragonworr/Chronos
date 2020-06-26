import React, { useContext } from 'react';
import Plot from 'react-plotly.js';
import { HealthContext } from '../context/HealthContext';

const MemoryChart = () => {
  const { healthData } = useContext(HealthContext);
  const createChart = () => {
    const free = healthData.freememory;
    const used = healthData.usedmemory;
    const active = healthData.activememory;

    return (
      <Plot
        data={[
          {
            type: 'scattergl',
            fill: 'tonexty',
            fillcolor: 'rgb(0, 237, 160)',
            mode: 'none',
            x: { autorange: true },
            y: free,
            name: 'Free Memory',
            rangemode: 'nonnegative',
          },
          {
            type: 'scatter',
            fill: 'tonexty',
            fillcolor: 'rgba(0, 237, 160, .4)',
            mode: 'none',
            x: { autorange: true },
            y: used,
            name: 'Used Memory',
            rangemode: 'nonnegative',
          },
          {
            type: 'scatter',
            fill: 'tonexty',
            fillcolor: 'rgba(74, 78, 238, .5)',
            mode: 'none',
            x: { autorange: true },
            y: active,
            name: 'Active Memory',
            rangemode: 'nonnegative',
          },
        ]}
        layout={{
          height: 400,
          width: 400,
          font: {
            color: 'black',
            size: 15,
            family: 'Nunito, san serif',
          },
          paper_bgcolor: 'white',
          plot_bgcolor: 'white',
          legend: {
            itemsizing: 'constant',
            orientation: 'h',
            xanchor: 'center',
            x: 0.5,
          },
          xaxis: {
            tickmode: 'linear',
            tick0: 0,
            dtick: 5,
          },
        }}
      />
    );
  };

  return <div className="memoryChart">{createChart()}</div>;
};

export default MemoryChart;
