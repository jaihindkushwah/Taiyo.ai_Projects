import React from "react";
import {XCircleIcon} from '@heroicons/react/24/solid'
import { Button } from "@material-tailwind/react";
import ContactsList from "../../components/ContactsList";
import MainComponent from "../../components/MainComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ContactPage(){
  const navigate=useNavigate();
  const contactsData=useSelector((state)=>state.value);
  
  return (<MainComponent title={'Contact Page'}>
              <div className="m-6 text-[16px] text-xl">
                <Button onClick={()=>{navigate('/createcontact')}} variant="standard" className="bg-slate-400 pt-3 pb-3 pl-12 pr-12 text-sm">Create Contact</Button>
              </div>
              
              { contactsData.length >0 ? <ContactsList/>:
                <> 
                  <div className="bg-red-50 m-3 p-5 flex justify-around items-center mb-5">
                  <div className="">
                    <XCircleIcon className="w-8 h-8 mr-3"/>
                  </div>
                  <p className="text-center">No Contact Found Please add contact from Create Contact Button</p>
                </div>
                </>
              }
          </MainComponent>
  );
}

export default ContactPage;
