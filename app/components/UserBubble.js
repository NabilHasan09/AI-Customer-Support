import { Box, Typography } from '@mui/material'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react'

export default function UserBubble() {
    const [message, setMessage] = useState('')

    return(
        <Box
        display="flex"
        alignSelf="flex-end"
        >
            <Box
            maxWidth="400px"
            display="flex"
            alignSelf="flex-end"
            p={2}
            sx={{ backgroundColor: "red", borderRadius: "30px", px: "20px", marginRight: "10px"}}
            >
                <Typography
                color="white"
                >
                    Give me some information about Tesla cars
                </Typography>
            </Box>
            <AccountCircleOutlinedIcon
            sx={{
                fontSize: "28px"
            }}
            />
        </Box>
    )
}