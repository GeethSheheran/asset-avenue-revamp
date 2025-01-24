import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const PieChartComponent = () => {
  const data = [
    { name: 'Red', value: 12, color: '#FF0000' },
    { name: 'Blue', value: 19, color: '#0000FF' },
    { name: 'Yellow', value: 3, color: '#FFFF00' },
    { name: 'Green', value: 5, color: '#008000' },
  ];

  const renderCustomizedLabel = (props) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = props;
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <section className="bg-black text-white py-10 px-5">
      <div className="flex flex-col md:flex-row gap-10"> 
        {/* Removed justify-center for no horizontal centering */}
        <div className="flex-1">
          <div className="relative w-full h-80 rounded-lg"> 
            <PieChart width={400} height={400}> 
              {/* Removed unnecessary width and height properties */}
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={150}
                innerRadius={0}
                fill="#8884d8"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Topic</h2>
          <ul className="space-y-3">
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 3</li>
            <li>Point 3</li>
            <li>Point 3</li>
            <li>Point 4</li>
          </ul>
          <button className="mt-5 text-blue-500 hover:underline">See More</button>
        </div>
      </div>
    </section>
  );
};

export default PieChartComponent;