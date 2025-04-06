import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const sampleData = [
  { name: "School A", sessions: 12 },
  { name: "School B", sessions: 18 },
  { name: "School C", sessions: 9 },
];

function GraphPage() {
  return (
    <div>
      <h2>Session Count by School</h2>
      <BarChart width={600} height={300} data={sampleData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sessions" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default GraphPage;
