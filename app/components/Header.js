"use client"
import { AppBar, Typography, IconButton, Toolbar, Drawer, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import Link from '@mui/material/Link'


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpenDrawer = () => {
        setIsOpen(true)
    }

    const handleCloseDrawer = () => {
        setIsOpen(false)
    }

    return(
        <Box>
        <AppBar
        sx={{ backgroundColor: "red"}}
        >
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={handleOpenDrawer}
                sx={{ mr: 2 }}
                >   
                    <MenuIcon/>
                </IconButton>

                <Typography
                p={2}
                marginLeft="100px"
                >
                    TeslaGuideAI
                </Typography>
            </Toolbar>
        </AppBar>

        <Drawer 
        anchor="left" 
        open={isOpen} 
        onClose={handleCloseDrawer}
        >   
            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            >
                <Typography
                p={2}
                sx={{ 
                    fontWeight: "bold",
                    fontSize: "30px",
                    color: "red"
                }}
                >
                    TeslaGuideAI
                </Typography>
                <Link 
                href="/Login" 
                underline="true"
                sx={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "30px",
                    marginBottom: "10px"
                }}
                >
                    Login
                    </Link>
                <Link 
                href="/Register" 
                underline="true"
                sx={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "30px"
                }}
                >
                    Sign up
                </Link>
            </Box>
        </Drawer>
        </Box>
    )
}