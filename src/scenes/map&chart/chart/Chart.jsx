import { ResponsiveLine } from '@nivo/line';
import React, { useEffect, useState } from 'react'
// import { datas } from './data';
function Chart() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
        .then((res)=>res.json())
        .then((res)=>{
            const cases=Object.entries(res.cases).map((item)=>{return {x:item[0],y:item[1]}});
            const recovered=Object.entries(res.recovered).map((item)=>{return {x:item[0],y:item[1]}});
            // const d=[{id:"cases",color:'',data:''}]
            const deaths=Object.entries(res.deaths).map((item)=>{return {x:item[0],y:item[1]}});
            const preProcessedData=[
                {"id":"Cases","color": "hsl(293, 70%, 50%)",data:cases},
                {"id":"Deaths","color": "hsl(279, 70%, 50%)",data:deaths},
                {"id":"Recovered","color": "hsl(332, 70%, 50%)",data:recovered}
            ];
            // console.log(preProcessedData);
            setData(preProcessedData);
        });
    },[])

    
  return (
    <div className='z-10 w-11/12 h-[600px] bg-slate-500 sm:ml-10 p-4'>
        
        {/* {console.log(data)} */}
        <ResponsiveLine
        data={data}
        
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        curve='monotoneX'
        yFormat=" >.0f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Date',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 55,
            legend: 'Count',
            legendOffset: -52,
            legendPosition: 'middle'
            
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-40}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    </div>
  )
}

export default Chart

