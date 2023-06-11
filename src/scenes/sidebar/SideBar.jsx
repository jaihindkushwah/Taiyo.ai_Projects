import React, { useContext } from 'react'
import {UserGroupIcon ,PresentationChartBarIcon,XMarkIcon } from '@heroicons/react/24/solid'
import {IconButton, List,ListItem, ListItemPrefix } from '@material-tailwind/react'
import { useNavigate  } from 'react-router-dom'
import { collapseContext } from '../../collapseContext/collapseContext'

function SideBar() {
  const navigate=useNavigate();
 const {isCollapse,setCollapse}= useContext(collapseContext);
  return (
    <div className='z-50 h-screen fixed top-0 z-50 w-60 bg-red-100 flex flex-col items-center ease-in duration-300' style={{marginLeft:isCollapse && '-240px'} }>
      <div>
        <List>
          <IconButton variant='outlined' onClick={()=>{setCollapse(!isCollapse)}} className='flex justify-center self-center items-center shadow-none'>
                {/* <div className='h-7 mt-3'> */}
                  <XMarkIcon className='h-6 w-8'/>
                {/* </div>  */}
          </IconButton>
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