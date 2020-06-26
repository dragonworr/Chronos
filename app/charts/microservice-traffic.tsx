import React, { useContext } from 'react';
import Plot from 'react-plotly.js';
import { CommsContext } from '../context/CommsContext';

const MicroServiceTraffic = () => {
  const { commsData } = useContext(CommsContext);

  const microServiceCountdictionary: { [key: number]: any } = {};
  // iterate over Trace Points
  for (let i = 0; i < commsData.length; i += 1) {
    // populate Micro-count dictionary
    if (!microServiceCountdictionary[commsData[i].microservice]) {
      microServiceCountdictionary[commsData[i].microservice] = 1;
    } else {
      microServiceCountdictionary[commsData[i].microservice] += 1;
    }
  }
  // capture values of microServiceCountdictionary to use as data to populate chart object
  const serverPingCount: number[] = Object.values(microServiceCountdictionary);
  // variable 10 points higher than max number in microservicesDictionary aggregation --> variable allows for top level spacing on bar graph
  const yAxisHeadRoom: number = Math.max(...serverPingCount) + 10;
  // console.log('here is commsdata in microservicetraffic:     ', commsData);
  // initialize an empty object resObj. This object will store the microservice names as values and its corresponding correlatingId or correlatingid as keys. The microservice names will be stored in array within the order it was to the database.
  // const resObj = {};

  // if (commsData.length > 0) {
  //   // Sort the communication array from latest to earliest document
  //   commsData.sort((a, b) => {
  //     if (new Date(a.timeSent) > new Date(b.timeSent)) return 1;
  //     if (new Date(a.timeSent) < new Date(b.timeSent)) return -1;
  //     return 0;
  //   });
  //   console.log('here is commsdata in microservicetraffic after sorting:     ', commsData);

  // Iterate over sorted commsData array from the end to the beginning
  //   for (let i = 0; i < commsData.length; i += 1) {
  //     // declare a constant element and initialize it as the object at index i of the commsData array
  //     const element = commsData[i];
  //     // Pushes the microservice name into the object
  //     if (resObj[element.correlatingId]) {
  //       resObj[element.correlatingId].push(element.currentMicroservice);
  //     } else resObj[element.correlatingId] = [element.currentMicroservice];
  //   }
  // } else {
  //   for (let i = commsData.length - 1; i >= 0; i--) {
  //     const element = commsData[i];
  //     if (resObj[element.correlatingid])
  //       resObj[element.correlatingid].push(element.currentmicroservice);
  //     else resObj[element.correlatingid] = [element.currentmicroservice];
  //     // initializing the object with the first microservice
  //   }
  // }

  // use object values to destructure locations
  // const tracePoints = Object.values(resObj);

  // Declare Micro-server-count dictinary to capture the amount of times a particular server is hit

  // array logging every ping present in communications table ---> flat used to flatten multidimensional array and return 1d array
  // const tracePointLog = tracePoints.flat(Infinity);

  // Create chart object data to feed into bar component
  // const myChart = {
  //   // spread dictionary keys inorder to properly label chart x axis
  //   labels: [...Object.keys(microServiceCountdictionary)],
  //   datasets: [
  //     {
  //       label: 'Times server Pinged',
  //       backgroundColor: 'rgba(241, 207, 70,1)',
  //       borderColor: 'rgba(0,0,0,1)',
  //       borderWidth: 1,
  //       data: [...serverPingCount, 0, yAxisHeadRoom], // spread ping count array into data array to have chart populate the Y axis
  //     },
  //   ],
  // };

  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: ['Orders', 'Customers', 'Books', 'Reverse-Proxy'],
          y: [...serverPingCount, 0, yAxisHeadRoom],
          fill: 'tozeroy',
          marker: { color: '#5C80FF' },
          mode: 'none',
          name: 'Times Server Pinged',
          showlegend: true,
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
          orientation: 'h',
          xanchor: 'center',
          x: 0.5,
          y: 5,
        },
        yaxis: { rangemode: 'nonnegative' },
      }}
    />
  );
};

export default MicroServiceTraffic;
