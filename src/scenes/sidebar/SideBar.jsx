import React, { useContext } from 'react'
import {UserGroupIcon ,PresentationChartBarIcon,XMarkIcon } from '@heroicons/react/24/solid'
import {List,ListItem, ListItemPrefix } from '@material-tailwind/react'
import { useNavigate  } from 'react-router-dom'
import { collapseContext } from '../../collapseContext/collapseContext'

function SideBar() {
  const navigate=useNavigate();
 const {isCollapse,setCollapse}= useContext(collapseContext);
  return (
    <div className='h-screen w-60 bg-red-100 flex flex-col items-center ease-in duration-300' style={{marginLeft:isCollapse && '-240px'} }>
      <div>
        <List>
          <ListItem onClick={()=>{setCollapse(!isCollapse)}} className='flex justify-center w-11 self-center'>
                <XMarkIcon className='h-5 w-6'/>
          </ListItem>
          <div className='mt-3 mb-4'>
            <h2 className='p-5'>Sidebar</h2>
          </div>
          <ListItem onClick={()=>{navigate('/')}} className='p-1 mt-4'>
            <ListItemPrefix>
              <UserGroupIcon className='h-5 w-6 mr-1' />
            </ListItemPrefix>
            Users
          </ListItem>
          <ListItem onClick={()=>{navigate('/mapandchart')}} className='p-1 mt-4'>
            {/* <Link to={'/'}> */}
              <ListItemPrefix>
                <PresentationChartBarIcon className='h-5 w-6 mr-1' />
              </ListItemPrefix>
              Charts and Maps
            {/* </Link> */}
          </ListItem>
        </List>
      </div>
        
    </div>
  )
}

export default SideBar