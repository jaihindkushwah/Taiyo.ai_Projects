
import React from 'react'
import LeafletMap from './map/LeafletMap'
import LineChart from './chart/LineChart'

function MapAndChartPage() {
  return (
    <div className='min-h-screen min-w-full flex justify-center items-center flex-col'>
      <div className=' min-h-[500px] min-w-full flex justify-center items-center'>
          <LineChart/>
      </div>
      <div className=' min-h-[500px] sm:w-5/6 flex justify-center items-center sm:bg-slate-400 sm:mt-10 pt-10 pb-10 sm:ml-10 mb-10 p-6'>
          <LeafletMap/>
      </div>
    </div>
    
  )
}

export default MapAndChartPage