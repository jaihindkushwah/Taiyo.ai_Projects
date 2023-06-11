import React from 'react'
import MainComponent from '../../components/MainComponent'
import { useParams } from 'react-router-dom'
import EditForm from '../../components/EditForm';

function EditContactPage() {
  const {id}=useParams();
  console.log(id); 
    
  return (
    <MainComponent title={'Contact Page'}>
        <EditForm key={id+"Key"} id={id}/>
    </MainComponent>
  )
}

export default EditContactPage