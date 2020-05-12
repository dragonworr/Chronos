import React, { useContext } from 'react';
import Plot from 'react-plotly.js';
import CommunicationsContext from '../context/OverviewContext';

const RequestTypesChart = (props) => {
  const communicationsData = useContext(CommunicationsContext).overviewData;

    const createRequestChart = () => {
    const requestObj = {
      DELETE: 0,
      GET: 0,
      PATCH: 0,
      POST: 0,
      PUSH: 0,
      PUT: 0,
    };

    for (let i = 0; i < communicationsData.length; i += 1) {
      const element = communicationsData[i];
      // if Mongo
      if (element.currentMicroservice === props.service && element.reqType in requestObj) requestObj[element.reqType] += 1;
      // if SQL
      else if (element.currentmicroservice === props.service && element.reqtype in requestObj) requestObj[element.reqtype] += 1;
    }

    return (
      <Plot
        data = {[{
          values: Object.values(requestObj),
          labels: ['DELETE', 'GET', 'PATCH', 'POST', 'PUSH', 'PUT'],
          type: 'pie',
          name: 'Request Types',
          marker: {
            'colors': [
              '#c1e1dc',
              '#008dcb',
              '#ffeb94',
              '#f47d4a',
              '#73605b',
              '#d09683',           
            ]
          },
        }]}
        layout = {{
          height: 400,
          width: 400,
          font: {
            color: 'azure',
            size: 15
          },
          displaylogo: false,
          paper_bgcolor: '#8BA6B9',
          legend: {
              orientation: 'h',
              xanchor: 'center',
              x: .5,
          }
        }}
      />
    )
  };

  return <div>{createRequestChart()}</div>;
};

export default RequestTypesChart;