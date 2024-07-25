import React, { forwardRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './PostingArea.css'
import { Button, TextField, Typography } from '@mui/material'

export const AddCertification = forwardRef(function AddCertification({ }, ref) {

    function closeDialog() {
        ref.current.close();
    }

    return (
        <dialog className='result-modal' ref={ref} style={{ width: '40%', padding: '0', height: '90%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0', padding: '2%', height: '6%' }}>
                <Typography variant='h6' fontWeight='bold'>Add license or certification</Typography>
                <button onClick={closeDialog} style={{ float: 'right', border: 'none', backgroundColor: 'white' }}><CloseIcon sx={{ ':hover': { cursor: 'pointer' } }} /></button>
            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div style={{ padding: '2%', display: 'flex', flexDirection: 'column', overflow: 'auto', height: '85%', gap: '2%' }}>
                <Typography sx={{ color: 'rgb(0,0,0,0.5)' }} variant='body2'>*indicates required</Typography>
                <Typography variant='body2'>Name*</Typography>
                <TextField size='small' fullWidth />
                <Typography variant='body2'>Issuing organization*</Typography>
                <TextField size='small' fullWidth />
                <Typography variant='body2'>Issue Date</Typography>
                <div style={{ width: '100%',display:'flex',justifyContent:'space-between'}}>
                    <select style={{ width: '47%'}}>
                        <option>Month</option>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                    <select style={{ width: '47%'}}>
                        <option>Year</option>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                </div>
                <Typography variant='body2'>Expiration Date</Typography>
                <div style={{width: '100%',display:'flex',justifyContent:'space-between' }}>
                    <select style={{ width: '47%'}}>
                        <option>Month</option>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                    <select style={{ width: '47%'}}>
                        <option>Year</option>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                </div>                    
                <Typography variant='body2'>Credential ID</Typography>
                <TextField size='small' fullWidth />
                <Typography variant='body2'>Credential URL</Typography>
                <TextField size='small' fullWidth />

                <Typography variant='h6' fontWeight='bold'>Skills</Typography>
                <div>
                    <Typography variant='body2'>Associate at least 1 skill to this license or certification. It’ll also appear in your Skills section.</Typography>
                </div>
                <div>
                    <Button variant='outlined' sx={{ borderRadius: '20px', fontWeight: 'bold' }}>+ Add Skill</Button>
                </div>

                <Typography variant='h6' fontWeight='bold'>Media</Typography>
                <div>
                    <Typography variant='body2'>Add media like images, documents, sites or presentations. Learn more about media file types supported</Typography>
                </div>
                <div>
                    <Button variant='outlined' sx={{ borderRadius: '20px', fontWeight: 'bold' }}>+ Add Media</Button>
                </div>
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