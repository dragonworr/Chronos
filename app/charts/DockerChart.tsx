/** From Version 5.2 Team:
 * No functional changes; just fixed linting errors.
 * Did not test or make use of any Docker data.
 */

import React, { useContext } from 'react';

import moment from 'moment';
import { DockerContext } from '../context/DockerContext';

interface IContainer {
  containername: string;
  containerid: string;
  platform: string;
  starttime: string;
  memoryusage: number;
  memorylimit: number;
  memorypercent: number;
  cpupercent: number;
  networkreceived: number;
  networksent: number;
  processcount: number;
  restartcount: number;
}

/**
 * Table that displays real-time Docker container information using the
 * latest data point available ???
 */
const DockerStatsChart = React.memo(() => {
  const { dockerData } = useContext(DockerContext);

  const {
    containername,
    containerid,
    platform,
    starttime,
    memoryusage,
    memorylimit,
    memorypercent,
    cpupercent,
    networkreceived,
    networksent,
    processcount,
    restartcount,
  }: IContainer = dockerData;

  return containerid ? (
    <div className="chart docker-chart">
      <h2>Docker Container Stats</h2>
      <span>Container Name: {containername}</span>
      <span>Platform: {platform}</span>
      <span>Start time: {moment(starttime).format('LLL')}</span>
      <span>Memory Usage: {(memoryusage / 1000000).toFixed(2)}</span>
      <span>Memory Limit: {(memorylimit / 1000000).toFixed(2)}</span>
      <span>Memory Percent: {memorypercent.toFixed(2)}%</span>
      <span>CPU percent: {cpupercent.toFixed(2)}%</span>
      <span>Network I/O - Received (Kb): {networkreceived / 1000}</span>
      <span>Network I/O - Sent (Kb): {networksent / 1000}</span>
      <span>Process Count: {processcount}</span>
      <span>Restart Count: {restartcount}</span>
    </div>
  ) : null;
});

export default DockerStatsChart;
