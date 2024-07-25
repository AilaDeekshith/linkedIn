import { Button,Input, InputLabel,TextField, Typography } from '@mui/material'
import React, { forwardRef, useContext, useState } from 'react'
import './PostingArea.css'
import CloseIcon from '@mui/icons-material/Close';
import { Context } from './Context';



export const AddJob = forwardRef(function AddJob({},ref) {

    const {getJobs} = useContext(Context)


    const [jobDetails,setJobDetails] = useState({
        role:'',
        organizationIcon:'',
        organization:'',
        jobType:'',
        location:''
    });


    function handleDetails(event){

        console.log("hello")

        if(event.target.name === 'organizationIcon'){
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.addEventListener("load",()=>{
                setJobDetails((pre)=>{
                    return{
                        ...pre,
                        [event.target.name]:reader.result
                    }
                })
            })

            reader.readAsDataURL(file);
        }
        // if(event.target.name === 'jobType'){
        //     console.log(event.target.value);
        // }
        else{
            setJobDetails((pre)=>{
                return{
                    ...pre,
                    [event.target.name]:event.target.value
                }
            })
        }
        
    }


    function handleSubmit(event){
        event.preventDefault();

        console.log(jobDetails)


        fetch('http://localhost:8080/addJobPost',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(jobDetails)
        })
        .then((response)=>{
            if(response.ok){
                getJobs();
                ref.current.close();
            }
        })

    }

    function handleClose(){
        ref.current.close();
    }

  return (
    <dialog className='result-modal' ref={ref} style={{width:'40%'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <Typography color='primary' fontWeight='bold' variant='h6'>Add Job</Typography>
            <Button onClick={handleClose}><CloseIcon color='info'/></Button>
        </div>
            <form method='dialog' onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'10px'}}>

                <InputLabel>Role</InputLabel>
                <TextField onChange={handleDetails} type='text' size='small' placeholder='role' name='role' value={jobDetails.role}></TextField>

                <InputLabel>OrganizationIcon</InputLabel>
                <Input onChange={handleDetails} type='file' name='organizationIcon' accept='images/*'></Input>

                <InputLabel>Organization</InputLabel>
                <TextField onChange={handleDetails} type='text' size='small' placeholder='Write your information regarding post here' name='organization' value={jobDetails.organization}></TextField>
                
                <InputLabel>JobType</InputLabel>

                <select value={jobDetails.jobType} name='jobType' onChange={handleDetails} style={{height:'45px',border:'1px solid rgb(0,0,0,0.2)',backgroundColor:'white',borderRadius:'5px'}}>
                    <option>Please select an option</option>
                    <option value='Hybrid'>Hybrid</option>
                    <option value='Remote'>Remote</option>
                    <option value='On-Site'>On-Site</option>
                </select>

                <InputLabel>Location</InputLabel>
                <TextField onChange={handleDetails} type='text' size='small' name='location' value={jobDetails.location}></TextField>

                <Button type='submit' variant='contained'>Submit</Button>

            </form>
    </dialog>
  )
})