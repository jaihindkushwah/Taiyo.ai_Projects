
import React from 'react'
// import Chart from './chart/Chart'
import LineChart from './chart/LineChart'

function MapAndChartPage() {
  return (
    <div className='min-h-screen min-w-full flex justify-center items-center'>
      <div className=' min-h-[500px] min-w-full flex justify-center items-center'>
          {/* <Chart/> */}
          <LineChart/>
      </div>
    </div>
    
  )
}

export default MapAndChartPage