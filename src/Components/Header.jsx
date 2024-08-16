import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import { AppBar, CssBaseline, Grid, IconButton, InputAdornment, Menu, MenuItem, Tab, Tabs, TextField, Toolbar, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import Me from './Me';
import Business from './Business';

export default function Header() {

    // const tabValues = [0, 1, 2, 3, 4];
    const [tabValue, setTabValue] = useState(0);
    const [displayTab,setDisplayTab] = useState(true);

    let preTab = tabValue;

    function handleTabIndicator() {

        switch (window.location.pathname) {
            case "/home/":
                setTabValue(0)
                break;
            case "/network/":

                setTabValue(1)
                break;
            case "/jobs/":
                setTabValue(2)
                break;
            case "/messages/":
                setTabValue(3)
                break;
            case "/notifications/":
                setTabValue(4)
                break;
            default:
                setTabValue(5)
        }
    }

    const tabStyle = {
        backgroundColor:'rgb(0,0,0)'
    }

    useEffect(() => {
        handleTabIndicator()
    }, [])

    const navigate = useNavigate()

    function handleTabChange(event, value) {

        setTabValue(value);

        switch (value) {
            case 0:
                navigate('home/')
                break;
            case 1:
                navigate('network/')
                break;
            case 2:
                navigate('jobs/')
                break;
            case 3:
                navigate('messages/')
                break;
            case 4:
                navigate('notifications/')
                break;
            default:
                console("tab does not exist")
        }
    }


    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const [businessAnchorEl, setBusinessAnchorEl] = useState(null)
    const openBusiness = Boolean(businessAnchorEl)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleBusiness(event) {
        setBusinessAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    function handleBusinessClose() {
        setBusinessAnchorEl(null)
    }

    return (
        <>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: 'white', boxShadow: '0px 0px 1px 1px rgb(0,0,0,0.1)' }}>
                <Toolbar>
                    <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5%' }}>
                        <Grid item sx={{ display: 'flex', alignItems: 'center', gap: '5%', justifyContent: 'space-evenly' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <LinkedInIcon color='primary' sx={{ fontSize: '50px' }} />
                                <TextField sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { border: 'none' } }, backgroundColor: '#edf3f8', borderRadius: '10px', height: '40px', ":focus-within": { border: '2px solid black' }, display: 'flex', alignItems: 'center' }} size='small' placeholder='Search' variant='outlined' InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                            </div>
                        </Grid>
                        <Grid>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <Tabs value={tabValue} onChange={handleTabChange}>
                                    <Tab value={0} onClick={() => navigate('home/')} sx={{ textTransform: 'none'}} icon={<HouseRoundedIcon />} label="Home" />
                                    <Tab value={1} onClick={() => navigate('network/')} sx={{ textTransform: 'none' }} icon={<GroupIcon />} label='My Network' />
                                    <Tab value={2} onClick={() => navigate('jobs/')} sx={{ textTransform: 'none' }} icon={<WorkIcon />} label='Jobs' />
                                    <Tab value={3} onClick={() => navigate('messages/')} sx={{ textTransform: 'none' }} icon={<MessageIcon />} label='Messaging' />
                                    <Tab value={4} onClick={() => navigate('notifications/')} sx={{ textTransform: 'none' }} icon={<NotificationsIcon />} label='Notifications' />
                                </Tabs>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <IconButton id='me-button' sx={{ display: 'block' }} onClick={handleClick}
                                        aria-controls={open ? 'me-menu' : undefined}
                                        aria-haspopup='true'
                                        aria-expanded={open ? 'true' : undefined}>
                                        <AccountCircleIcon />
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant='body2'>Me</Typography>
                                            <KeyboardArrowDownIcon />
                                        </div>
                                    </IconButton>
                                    <hr />
                                    <IconButton id='business-button' sx={{ display: 'block' }} onClick={handleBusiness}
                                        aria-controls={openBusiness ? 'business-menu' : undefined}
                                        aria-haspopup='true'
                                        aria-expanded={openBusiness ? 'true' : undefined}>
                                        <AppsIcon />
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant='body2'>for Business</Typography>
                                            <KeyboardArrowDownIcon />
                                        </div>
                                    </IconButton>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Menu sx={{ marginTop: '10px' }}
                id='me-menu' anchorEl={anchorEl} open={open}
                MenuListProps={{ 'aria-labelledby': 'me-button' }}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                <MenuItem onClick={handleClose}><Me/></MenuItem>
            </Menu>
            <Menu sx={{ marginTop: '10px' }}
                id='business-menu' anchorEl={businessAnchorEl} open={openBusiness}
                MenuListProps={{ 'aria-labelledby': 'business-button' }}
                onClose={handleBusinessClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
                transformOrigin={{ vertical: 'top', horizontal: 'right', }}>
                <MenuItem onClick={handleBusinessClose}><Business /></MenuItem>
            </Menu>
            <Toolbar />
        </>
    )
}