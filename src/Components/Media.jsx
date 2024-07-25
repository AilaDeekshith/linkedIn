import React, { forwardRef, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './PostingArea.css'
import { Button, Typography } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const Media = forwardRef(function Media({ beforeRef,back}, ref) {

    const inputRef = useRef()

    function closeDialog() {
        ref.current.close()
    }

    function backDialog() {
        ref.current.close()
        beforeRef.current.showModal()
    }

    return (
        <dialog ref={ref} className='result-modal' style={{ width: '65%', height: '100%', padding: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1%' }}>
                <Typography variant='h6' fontWeight='bold'>Editor</Typography>
                <button onClick={closeDialog} style={{ float: 'right', border: 'none', backgroundColor: 'white' }}><CloseIcon fontSize='medium' sx={{ ':hover': { cursor: 'pointer' } }} /></button>
            </div>
            <hr style={{ color: 'rgb(0,0,0,0.1)' }} />
            <div style={{ backgroundColor: 'rgb(248, 250, 253)', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '5%' }}>
                    <FileUploadIcon fontSize='large' />
                    <Typography variant='h5' fontWeight='bold'>Select files to begin</Typography>
                    <Typography>Share images or single video in your post</Typography>
                    <Button onClick={()=> inputRef.current.click()} variant='contained' sx={{textDecoration:'none',borderRadius:'5rem'}}>Upload from computer</Button>
                </div>
            </div>
            <hr style={{ color: 'rgb(0,0,0,0.1)' }} />
            <input ref={inputRef} type='file' style={{display:'none'}}/>
            <div style={{ float: 'right', display: 'flex', gap: '5%', padding: '1%' }}>
                {back && <Button variant='contained' onClick={backDialog} sx={{ borderRadius: '20px', ':hover': { cursor: 'pointer' } }}>Back</Button>}
                <Button disabled variant='outlined' onClick={closeDialog} sx={{ borderRadius: '20px', ':hover': { cursor: 'pointer' } }}>next</Button>
            </div>
        </dialog>
    )
})