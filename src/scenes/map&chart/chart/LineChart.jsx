import React,{useState,useEffect} from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Covid-19 All Country Reports',
      },
    },
  };



function LineChart() {
    const [allCovidData,setData]=useState({});
    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
        .then((res)=>res.json())
        .then((res)=>{
            const cases=Object.entries(res.cases).map((item)=>{return item[1]});
            const recovered=Object.entries(res.recovered).map((item)=>{return item[1]});
            // const d=[{id:"cases",color:'',data:''}]
            const deaths=Object.entries(res.deaths).map((item)=>{return item[1]});
            const dates=Object.entries(res.cases).map((item)=>{return item[0]});
            const modifedData=[
                {"fill":true,"label":"Cases","borderColor": "hsl(200, 70%, 50%)", data:cases},
                {"fill":true,"label":"Deaths","borderColor": "hsl(250, 70%, 50%)", data:deaths},
                {"fill":true,"label":"Recovered","borderColor": "hsl(342, 70%, 50%)", data:recovered}
            ];
            // console.log(preProcessedData);
            setData({modifedData,dates});
        });
    },[])

    console.log(allCovidData);
    

  return (
    <div className='z-10 h-full sm:w-5/6 w-screen sm:bg-slate-400 sm:ml-10 sm:mt-10 p-4 text-red-50'>
        {Object.entries(allCovidData).length>0 && <Line className='sm:w-full w-[24]' 
          data={{
            labels: allCovidData.dates.map((date) => new Date(date).toLocaleDateString()),
            datasets: [...allCovidData.modifedData],
          }}
          options={options}
        >
        </Line>}
    </div>
  )
}

export default LineChart