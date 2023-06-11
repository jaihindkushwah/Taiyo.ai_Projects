import React from 'react'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

function ContactsList() {
  const contactsData=useSelector((state)=>state.value);
  
  return (
    <div className="flex flex-wrap justify-center pl-1 pr-1 gap-3 mb-5">
      {console.log(contactsData)}
      
        {
          contactsData.map((item)=>{
            return <ContactItem key={item.id} id={item.id} firstname={item.firstname} lastname={item.lastname} status={item.status}  />
          })
          
        }
        
    </div>
    
  )
}

export default ContactsList