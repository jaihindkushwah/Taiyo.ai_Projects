import { Button } from '@material-tailwind/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {editData } from '../redux/crateContactSlice';
import { useNavigate } from 'react-router-dom';


function EditForm({id}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const contactsData=useSelector((state)=>state.value);
    const [personData,setPersonData]=useState({...contactsData.find((item)=>item.id===Number(id))});

    const formHandler=(e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        const status=formData.get('status');
        const firstname=formData.get('firstname');
        const lastname=formData.get('lastname');

        const dataObject={id:Number(id),firstname,lastname,status};
        if(!Object.values(dataObject).includes("")){
            dispatch(editData(dataObject))
            navigate('/contact')
        }else{
            alert("Please fill all Field")
        }
        e.target.reset();

        };
  return (
    <div className='flex-1 flex flex-col justify-around items-center sm:w-[600px] text-[14px] sm:text-[16px]'>
        <div className='text-[18px]'>
            Edit Contact Screen
        </div>
        <form onSubmit={(e)=>{formHandler(e)}}>
            <div className=' flex flex-col justify-around gap-6 items-center p-3'>
                <label htmlFor="firstname"> <span>First Name : </span>
                    <input name='firstname' className='pl-1' value={personData.firstname} onChange={(e)=>{setPersonData({...personData,firstname:e.target.value})}}   type="text" />
                </label>
                <label htmlFor="lastname"> <span>Last Name : </span> 
                    <input name='lastname' className='pl-1' value={personData.lastname} onChange={(e)=>{setPersonData({...personData,lastname:e.target.value})}}  type="text" />
                </label>
                <div className='flex items-center w-full gap-6'>Status :
                    <div className='flex gap-5 flex-col sm:flex-row'>
                    <label htmlFor="status">
                        <input type="radio"  name='status' defaultChecked={personData.status==='active'} value="active" onChange={(e)=>{setPersonData({...personData,status:e.target.value})}} id="" /> <span> Active</span>
                    </label>
                    <label htmlFor="">
                        <input type="radio" name='status'defaultChecked={personData.status==='inactive'} value="inactive" onChange={(e)=>{setPersonData({...personData,status:e.target.value})}} id="" /> <span> Inactive</span>
                    </label>
                    </div>
                </div>
                <div>
                    <Button variant='filled' type='submit' className='p-2 mt-2 pr-7 pl-7 text-[14px] sm:text-[16px] bg-slate-100' >Save Editted Contact</Button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditForm