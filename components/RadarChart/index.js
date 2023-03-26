import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import styles from './RadarChart.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart() {
  const [chartData, setChartData] = useState({
    labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
    datasets: [
      {
        label: '# of Votes',
        data: [2, 9, 3, 5, 2, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Vote Count',
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        r: {
          angleLines: {
            color: 'rgb(1,1,1,1)',
          },
          ticks: {
            color: 'rgb(1,1,1,1)',
          },
          grid: {
            color: 'rgb(1,1,1,1)',
          },
          pointLabels: {
            color: 'rgb(1,1,1,1)',
          },
        },
      },
    });
  }, []);

  return (
    <div className={styles.container}>
      <Radar data={chartData} options={chartOptions} />
    </div>
  );
}