import React, { useContext } from 'react'
import {Bars3Icon } from '@heroicons/react/24/solid'
import { collapseContext } from '../../collapseContext/collapseContext'


function TopBar() {
  const {isCollapse,setCollapse}=useContext(collapseContext);
  return (
    <div className='h-16 w-full bg-slate-800 ease-in-out duration-400' >
        {isCollapse && <div className='mt-3 ml-3'>  
          <Bars3Icon onClick={()=>{setCollapse(!isCollapse)}} className='w-8 h-7 cursor-pointer'/>
        </div>}
    </div>
  )
}

export default TopBar