import { Button } from '@material-tailwind/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { deleteData } from '../redux/crateContactSlice';

function ContactItem({id,firstname,lastname,status}) {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  return (
    <div className="flex flex-col justify-center shadow-lg shadow-red-2 p-3 text-sm ">
        <div className="w-[236px] h-[200px] flex flex-col items-center justify-center gap-2 bg-blue-200">
            <div className='w-[75px] h-[75px] rounded-[50%] flex justify-center items-center bg-slate-400 '>
              <img src='https://cdn-icons-png.flaticon.com/512/3459/3459528.png' width={55} alt='logo'/><img  alt=''/>
            </div>
            <div className='flex flex-col gap-2 text-[16px]'>
              <span>First Name: {firstname}</span>
              <span>Last Name: {lastname}</span>
              <span>Status: {status}</span>
            </div>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-3 ">
            <Button variant="standard" onClick={()=>{navigate(`/editcontact/${id}`)}} className="w-[90px] p-2 pl-3 pr-3 self-center bg-red-200 mt-3 text-sm" >Edit</Button>
            <Button variant="standard" onClick={()=>{dispatch(deleteData(id))}} className="w-[90px] p-2 pl-3 pr-3 self-center bg-red-200 mt-3 text-sm" >Delete</Button>
        </div>
    </div>
  )
}

export default ContactItem