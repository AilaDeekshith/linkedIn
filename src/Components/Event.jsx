import React, { forwardRef, useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './PostingArea.css'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export const Event = forwardRef(function Event({ beforeRef,back }, ref) {

    function closeDialog() {
        ref.current.close();
    }

    function backDialog() {
        ref.current.close();
        beforeRef.current.showModal();
    }

    const imageRef = useRef()

    function handleImageRef() {
        imageRef.current.click();
    }

    return (
        <dialog style={{ width: '50%', height: '80%', padding: '0%' }} className='result-modal' ref={ref}>
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2%' }}>
                    <Typography variant='h6' fontWeight='bold'>Create an Event</Typography>
                    <button onClick={closeDialog} style={{ float: 'right', border: 'none', backgroundColor: 'white' }}><CloseIcon sx={{ ':hover': { cursor: 'pointer' } }} /></button>
                </div>
                <div onClick={handleImageRef} style={{ backgroundColor: 'rgb(244, 242, 238)', width: '100%', height: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',margin:'0',padding:'0'}}>
                    <CameraAltIcon fontSize='large' />
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant='body1' fontWeight='bold'>Upload cover image</Typography>
                        <Typography variant='body1'>minimum width 480 pixels, 16:9 recommended</Typography>
                    </div>
                </div>
                <form style={{ padding: '2% 2%' }}>
                    <input style={{ display: 'none' }} ref={imageRef} type='file' accept='images/*'></input>
                    <FormControl>
                        <FormLabel id="eventType">Event Type</FormLabel>
                        <RadioGroup row aria-labelledby="eventType" name="eventType" defaultValue={'Online'}>
                            <FormControlLabel value="Online" control={<Radio />} label="Online" />
                            <FormControlLabel value="In Person" control={<Radio />} label="In Person" />
                        </RadioGroup>
                    </FormControl>
                </form>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '0% 2%', gap: '2%', height: '40%' }}>
                    <label>Event Format*</label>
                    <select style={{ height: '15%' }}>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                    <label>Event name*</label>
                    <input type='text' style={{ height: '13%' }}></input>
                    <label>Time Zone*</label>
                    <select style={{ height: '15%' }}>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                    </select>
                </div>
                <div style={{float:'right',padding:'2%',display:'flex',gap:'5%'}}>
                    {back && <Button variant='contained' onClick={backDialog} sx={{ borderRadius: '20px', ':hover': { cursor: 'pointer' } }}>Back</Button>}
                    <Button disabled variant='outlined' onClick={closeDialog} sx={{ borderRadius: '20px', ':hover': { cursor: 'pointer' } }}>Next</Button>
                </div>
            </div>
        </dialog>
    )
})