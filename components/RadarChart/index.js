import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import styles from './RadarChart.module.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function RadarChart() {
  const [chartData, setChartData] = useState({
    labels: ['On all cattle operations', 'On dairy operations', 'On beef operations', 'On cow calf operations', 'On feeder and stocker operations', 'On feeding operations'],
    datasets: [
      {
        label: '# of cattle',
        data: [565, 152, 413, 346, 50, 17],
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
          text: 'Number of cattle, by class and farm type in British Columbia 2023',
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