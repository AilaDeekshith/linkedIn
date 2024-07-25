import { Button, TextareaAutosize, Typography } from '@mui/material'
import React, { useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { forwardRef } from 'react';
import './PostingArea.css'
import { useSelector } from 'react-redux';
import { Event } from './Event';
import { Media } from './Media';


export const Posting = forwardRef(function Posting({ }, ref) {

    const user = useSelector((state) => state.Auth.user)

    const eventRef = useRef()
    const mediaRef = useRef()

    const handleFocus = (event) => {
        event.target.style.outline = 'none';
        event.target.style.boxShadow = 'none';
        event.target.style.borderColor = 'transparent';
    };

    const handleInput = (event) => {
        event.target.style.height = 'auto'; // Reset height to recalculate
        event.target.style.height = event.target.scrollHeight + 'px'; // Adjust height based on content
    };

    function handleEvent() {
        eventRef.current.showModal();
        ref.current.close();
    }

    function closeDialog(){
        ref.current.close();
    }

    function handleMedia(){
        inputRef.current.click();
        mediaRef.current.showModal();
        ref.current.close()
    }

    const inputRef = useRef()

    return (
        <>
            <Event ref={eventRef} beforeRef={ref} back={true}/>
            <Media ref={mediaRef} beforeRef={ref} back={true}/>
            <dialog className='result-modal' ref={ref} style={{ marginTop: '50px', padding: '10px' }}>
                <button onClick={closeDialog} style={{ float: 'right', border: 'none', backgroundColor: 'white' }}><CloseIcon sx={{ ':hover': { cursor: 'pointer' } }} /></button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src={user.icon} style={{ height: '60px', width: '60px', borderRadius: '50%', backgroundColor: 'white', border: '1px solid black' }} alt='Dhoni'></img>
                    <div>
                        <Typography fontWeight='bold' variant='h5' textTransform='uppercase'>{user.name}.</Typography>
                        <Typography variant='caption'>post to Anyone</Typography>
                    </div>
                </div>
                <textarea onFocus={handleFocus} onInput={handleInput} rows={10} cols={60} placeholder='What do you want to talk about?' style={{ fontSize: '20px' }}></textarea>
                <div style={{ margin: '20px 10px' }}>
                    <SentimentSatisfiedAltIcon />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', margin: '20px 0px' }}>
                    <Button sx={{ borderRadius: '20px', border: '2px solid black', fontWeight: 'bold', color: 'black' }} variant='outlined'>Rewrite with AI</Button>
                    <InsertPhotoIcon onClick={handleMedia} sx={{ ':hover': { cursor: 'pointer' } }} />
                    <CalendarMonthIcon onClick={handleEvent} sx={{ ':hover': { cursor: 'pointer' } }} />
                    <AddIcon />
                </div>
                <input style={{display:'none'}} type='file' ref={inputRef}></input>
                <hr />
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', float: 'right' }}>
                    <AccessTimeIcon />
                    <Button sx={{ borderRadius: '20px' }} variant='contained' disabled>Post</Button>
                </div>
            </dialog>
        </>
    )
})
