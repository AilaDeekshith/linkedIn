import React, { forwardRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './PostingArea.css'
import { Button, TextField, Typography } from '@mui/material'

export const AddLanguage = forwardRef(function AddLanguage({},ref) {

    function closeDialog() {
        ref.current.close();
    } 

    return (
        <dialog className='result-modal' ref={ref} style={{ width: '40%', padding: '0'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0', padding: '2%', height: '6%' }}>
                <Typography variant='h6' fontWeight='bold'>Add skill</Typography>
                <button onClick={closeDialog} style={{ float: 'right', border: 'none', backgroundColor: 'white' }}><CloseIcon sx={{ ':hover': { cursor: 'pointer' } }} /></button>
            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div style={{ padding: '2% 2% 0% 2%', display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{ color: 'rgb(0,0,0,0.5)' }} variant='body2'>*indicates required</Typography>
                <div style={{padding:"2% 0%"}}>
                <Typography variant='body2'>Language*</Typography>
                <TextField sx={{padding:'2% 0%'}} size='small' fullWidth />
                </div>
            </div>
            <div style={{padding:"0% 2% 2% 2%",width:'100%'}}>
                <Typography variant='body2'>Proficiency</Typography>
                <select style={{width:'100%'}}>
                    <option>Please select</option>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <hr style={{ margin: '0', padding: '0' }} />
                <div style={{ padding: '2%',display:'flex', justifyContent:'end'}}>
                    <Button variant='contained' sx={{ borderRadius: '3rem' }}>Save</Button>
                </div>
            </div>
        </dialog>
    )
})