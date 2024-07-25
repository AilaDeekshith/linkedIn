import { Button,Input, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import './PostingArea.css'
import { useContext } from 'react'
import { Context } from './Context'
import CloseIcon from '@mui/icons-material/Close';
import { useLoaderData } from 'react-router-dom'


export const AddPost = forwardRef(function AddPost({},ref) {
    
    const {getPosts} = useContext(Context);
    const {user} = useLoaderData()

    // const navigate = useNavigate();

    const [postDetails,setPostDetails] = useState({
        userEmailId:user.emailId,
        userName:user.name,
        role:user.designation,
        icon:'',
        image:'',
        description:'',
        likes:'',
        comments:'',
        reposts:''
    });


    function handleDetails(event){

        if(event.target.name === 'icon' || event.target.name === 'image'){
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.addEventListener("load",()=>{
                setPostDetails((pre)=>{
                    return{
                        ...pre,
                        [event.target.name]:reader.result
                    }
                })
            })
            reader.readAsDataURL(file);
        }
        else{
            setPostDetails((pre)=>{
                return{
                    ...pre,
                    [event.target.name]:event.target.value
                }
            })
        }
    }


    function handleSubmit(event){
        event.preventDefault();

        console.log(postDetails)


        fetch('http://localhost:8080/addPost',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postDetails)
        })
        .then((response)=>{
            if(response.ok){
                getPosts();
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
        <Typography color='primary' fontWeight='bold' variant='h6'>Add Post</Typography>
        <Button onClick={handleClose}><CloseIcon color='info'/></Button>
        </div>

            <form method='dialog' onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <Typography fontWeight='bold'>User Name</Typography>
                <TextField onChange={handleDetails} type='text' size='small' placeholder='User Name' name='userName' value={postDetails.userName}></TextField>

                <Typography fontWeight='bold'>Role</Typography>
                <TextField onChange={handleDetails} type='text' size='small' placeholder='Designation' name='role' value={postDetails.role}></TextField>

                <Typography fontWeight='bold'>Icon</Typography>
                <Input onChange={handleDetails} type='file' name='icon' accept='images/*'></Input>

                <Typography fontWeight='bold'>Description</Typography>
                <TextareaAutosize onChange={handleDetails} type='text' size='small' placeholder='Write your information regarding post here' name='description' value={postDetails.description}></TextareaAutosize>

                <Typography fontWeight='bold'>Image</Typography>
                <Input onChange={handleDetails} type='file' name='image' accept='images/*'></Input>

                <Typography fontWeight='bold'>Likes</Typography>
                <TextField onChange={handleDetails} type='number' size='small' placeholder='No of Likes' name='likes' value={postDetails.likes}></TextField>

                <Typography fontWeight='bold'>Comments</Typography>
                <TextField onChange={handleDetails} type='number' size='small' placeholder='No of Comments' name='comments' value={postDetails.comments}></TextField>

                <Typography fontWeight='bold'>Reposts</Typography>
                <TextField onChange={handleDetails} type='number' size='small' placeholder='No of Reposts' name='reposts' value={postDetails.reposts}></TextField>

                <Button type='submit' variant='contained'>Submit</Button>
            </form>
    </dialog>
  )
})