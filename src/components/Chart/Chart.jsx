import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2'
import { fetchDailyData } from '../../api'

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {

    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        async function fetch() {
            const data = await fetchDailyData()
            setDailyData(data)
        }
        fetch();
    }, []);



    const lineChart = (
        dailyData.length //if 0 false
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#333fff',
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255,0,0,0.5)',
                            fill: true
                        }]
                    }}
                />) : null
    )

    const barChart = (
        confirmed ? (
            <Bar

                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: 'People',
                        data: [confirmed.value, recovered.value, deaths.value],
                        backgroundColor: [
                            "rgba(0,0,255,0.5)",
                            "rgba(0,255,0,0.5)",
                            "rgba(255,0,0,0.5)",
                        ]

                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ${country}` },
                }}

            />
        ) : null
    )

    return (
        <>
            <div className={styles.container}>
                {
                    country ? barChart : lineChart
                }
            </div>
            <p className={styles.note}>Note: If you arenot seeing chart clearly switch to landscape mode.</p>
        </>
    )
}

export default Chart