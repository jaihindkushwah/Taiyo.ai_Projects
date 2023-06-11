
import React from 'react'
import LeafletMap from './map/LeafletMap'
import LineChart from './chart/LineChart'
// import { BarChart } from './bar/BarChart'

function MapAndChartPage() {
  return (
    <div className='min-h-screen min-w-full flex justify-center items-center flex-col mt-20'>
      <div className='sm:text-[30px] text-[20px]'>Charts and Maps</div>
      <div className=' min-h-[500px] min-w-full flex justify-center items-center'>
          <LineChart/>
          {/* <BarChart/> */}
      </div>
      <div className=' sm:min-h-[500px] sm:w-5/6 w-screen flex justify-center items-center sm:bg-slate-400 sm:mt-10 sm:pt-10 pb-10 sm:ml-10 mb-10 p-6'>
          <LeafletMap/>
      </div>
      {/* <BarChart/> */}
    </div>
    
  )
}

export default MapAndChartPage