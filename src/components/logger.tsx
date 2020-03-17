import React, { useState, useEffect } from 'react';

import './logger.css';

interface LoggerProps {
  logs: string[];
}
export const logs: string[] = [];

export const log = (message: string) => {
  logs.push(message);
};

const Logger: React.SFC<LoggerProps> = props => {
  const { logs } = props;
  return (
    <div className="logger">
      <ul>
        {logs.map((l, i) => {
          return <li key={i}>{l}</li>;
        })}
      </ul>
    </div>
  );
};

export default Logger;
