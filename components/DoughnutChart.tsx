"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance)

  const data = {
    datasets: [
      {
        label: 'Banks',
        data: [1200, 2533, 3700],
        backgroundColor: ['#1b98d6', '#1679AB', '#115f87']
      }
    ],
    labels: ['bank 1', 'bank 2', 'bank 3']
  }

  return <Doughnut
    data={data}
    options={{
      cutout: '60%',
      plugins: {
        legend: {
          display: false,
          //position: 'bottom'
        }
      }
    }}
  />
}

export default DoughnutChart;