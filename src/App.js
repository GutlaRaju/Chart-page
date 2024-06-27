import React, { useState, useEffect } from 'react';
import Chart from './components/Chart';
import TimeSelector from './components/TimeSelector';
import chartData from './data/chartData.json';

const filterDataByTimeframe = (data, timeframe) => {
  switch (timeframe) {
    case 'weekly':
      break;
    case 'monthly':
      break;
    default:
      return data;
  }
};

function App() {
  const [timeframe, setTimeframe] = useState('daily');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(filterDataByTimeframe(chartData, timeframe));
  }, [timeframe]);

  return (
    <div className="App">
      <TimeSelector onSelect={setTimeframe} />
      <Chart data={data} timeframe={timeframe} />
    </div>
  );
}

export default App;
