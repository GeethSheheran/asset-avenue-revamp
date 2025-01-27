import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

const PieChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const canvas = chartRef.current;
    const chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'My First Dataset',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              '#EF4444',
              '#3B82F6',
              '#FBBF24',
              '#10B981',
              '#A78BFA',
              '#F59E0B',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        aspectRatio: 1,
        cutout: '50%',
        animation: {
          animateRotate: false,
        },
      },
    });

    // Cleanup chart instance on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="w-64 h-64 mx-auto">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PieChart;
