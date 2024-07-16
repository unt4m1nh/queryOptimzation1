import React from 'react';
import { TExecStats } from '../../data/type';

interface IExecStatsProps {
  execStats: TExecStats | null;
}

const ExecStats = ({ execStats }: IExecStatsProps) => {
  if (execStats === null) {
    return;
  }

  return (
    <>
      <h5>Status: {execStats.executionSuccess}</h5>
      <h5>Returned Documents: {execStats.nReturned}</h5>
      <h5>Query time: {execStats.executionTimeMillis} (ms)</h5>
    </>
  );
};

export default ExecStats;
