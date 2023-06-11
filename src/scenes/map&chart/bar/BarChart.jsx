import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    indexAxis: 'y' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };


// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export function BarChart() {
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/all')
        .then((res)=>res.json())
        .then((res)=>{setData({...res})})
    },[data]);
    const totalData = {
        labels:Object.keys(data),
        datasets: [
          {
            label: 'Dataset 1',
            data: [...Object.values(data)],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };

  return <Bar options={options} data={totalData} />;
}
