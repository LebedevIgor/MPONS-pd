import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ chartData }) => {
  return (
    <ResponsiveContainer width="50%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="result"
          stroke="#6aff75"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
