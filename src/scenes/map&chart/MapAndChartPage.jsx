
import React from 'react'
import LeafletMap from './map/LeafletMap'
// import Chart from './chart/Chart'
// import LineChart from './chart/LineChart'

function MapAndChartPage() {
  return (
    <div className='min-h-screen min-w-full flex justify-center items-center'>
      <div className=' min-h-[500px] min-w-full flex justify-center items-center'>
          {/* <Chart/> */}
          {/* <LineChart/> */}
          <LeafletMap/>
      </div>
    </div>
    
  )
}

export default MapAndChartPage