'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import HamburgerIcon from '../../utills/hamburger.png'
import { ListItemIcon , List, Divider,ListItem,ListItemButton,ListItemText} from '@mui/material';

// import Image from 'next/image';
import Dashboard from '../../utills/dashboard.png'
import Note from '../../utills/note_alt.png'
import Quiz from '../../utills/quiz.png'
import Admin from '../../utills/admin_meds.png'

export default function SidebarMobile() {
    // this sidebar is for small screen devices
    // it is not functional now
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleTouch = () => {
        console.log('clicked')
    }

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Dashboard', 'Assessment', 'My Library'].map((text, index) => (
                    <ListItem key={text} onClick={handleTouch} disablePadding sx={{ border: text === 'Assessment' ? '1px solid #0073E6' : 'none', backgroundColor: text === 'Assessment' ? '#E5F1FC' : 'white', color: text === 'Assessment' ? '#0073E6' : 'black', borderRadius:'8px' }}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index === 0 ? <img src={Dashboard} alt="Dashboard" width={20} height={20} /> :
                                    index === 1 ? <img src={Note} alt="Assessment" width={20} height={20} /> :
                                        <img src={Quiz} alt="My Library" width={20} height={20} />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Round Status'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <img src={Admin} alt="Round" width={20} height={20} />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            {['left'].map((anchor) => (
                <React.Fragment key='left'>
                    <Button onClick={toggleDrawer('left', true)} endIcon={<img src={HamburgerIcon} alt="menu" />} ></Button>
                    <Drawer
                        anchor='left'
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                    >
                        {list('left')}
                    </Drawer>
                </React.Fragment>

            ))}
        </>
    );
}