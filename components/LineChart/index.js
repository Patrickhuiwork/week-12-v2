import { useEffect, useState } from "react";
import styles from './LineChart.module.css'

import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

export default function LineChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {

        setChartData({
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                },
                {
                    label: 'Dataset 2',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: 'rgb(255,99,132)',
                    backgroundColor: 'rgba(255,99,132,0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Chart.js Line Chart"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return(
        <>
            <div className={styles.container}>
                <Line data={chartData} options={chartOptions}/>
            </div>
        
        </>
    )
}