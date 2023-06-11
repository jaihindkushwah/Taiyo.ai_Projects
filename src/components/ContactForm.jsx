import { Button } from '@material-tailwind/react'
import React from 'react'
import { useDispatch } from 'react-redux';
import { addData } from '../redux/crateContactSlice';
import { useNavigate } from 'react-router-dom';

function ContactForm({status='active'}) {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const formHandler=(e)=>{
        e.preventDefault();
        const formData=new FormData(e.target);
        const status=formData.get('status');
        const firstname=formData.get('firstname');
        const lastname=formData.get('lastname');

        const id=Date.now();
        const dataObject={id:Number(id),firstname,lastname,status};
        // console.log(dataObject);
        if(!Object.values(dataObject).includes("")){
            dispatch(addData(dataObject));
            navigate('/contact')
        }else{
            alert("Please fill all Field")
        }

        };
  return (
    <div className='flex-1 flex flex-col justify-around items-center sm:w-[600px] text-[16px] sm:text-[18px'>
        <div>
            Create Contact Screen
        </div>
        <form action="" onSubmit={formHandler}>
            <div className=' flex flex-col justify-around gap-3 items-center p-3'>
                <label htmlFor="firstname"> <span>First Name : </span>
                    <input name='firstname' className='pl-1'  type="text" />
                </label>
                <label htmlFor="lastname"> <span>Last Name : </span> 
                    <input name='lastname' className='pl-1' type="text" />
                </label>
                <div className='flex items-center w-full gap-6'>Status :
                    <div className='flex gap-5 flex-col sm:flex-row'>
                    <label htmlFor="status">
                        <input type="radio" defaultChecked={status==="active" ? true:false} name='status' value="active" id="" /> <span> Active</span>
                    </label>
                    <label htmlFor="">
                        <input type="radio" defaultChecked={status==="inactive"?true:false} name='status' value="inactive" id="" /> <span> Inactive</span>
                    </label>
                    </div>
                </div>
                <div>
                    <Button variant='filled' type='submit' className='p-2 pr-7 pl-7 text-[18px]' >Save Contact</Button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ContactForm