"use client"
import { AppBar, Typography, IconButton, Drawer, Box, Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase';
import Link from '@mui/material/Link'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsOpen(false)
    }

    return (
        <Box>
            <AppBar sx={{ backgroundColor: "#659BDF"}}>
                <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography sx={{
                        ml: '20px', 
                        textShadow: 
                        `
                        -1px -1px 0 black,
                        1px -1px 0 black,
                        -1px 1px 0 black,
                        1px 1px 0 black
                        `,
                    }}>
                        Fund-Amental$
                    </Typography>
                    <IconButton size="large" color="inherit" onClick={handleOpenDrawer} sx={{mr: '10px'}}>
                        <MenuIcon/>
                    </IconButton>
                </Box>
            </AppBar>
            <Drawer anchor="right" open={isOpen} onClose={handleCloseDrawer}>   
                <Box display="flex" flexDirection="column" alignItems="space-between" justifyContent='space-between' height={'100vw'}>
                    <Typography p={2} sx={{ fontWeight: "bold", fontSize: "30px", color: "#659BDF" }}>Fund-Amental$</Typography>
                    <Button onClick= {() => {
                        signOut(auth)
                        handleCloseDrawer()
                    }}>
                        <Link underline='true' sx={{ fontWeight: "bold",fontSize: "25px", color: "Blue" }}></Link>
                    </Button>
                </Box>
            </Drawer>
        </Box>
    )
}
