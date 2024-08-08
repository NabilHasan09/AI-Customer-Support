"use client" 
import { Box, TextField, IconButton, Stack } from  '@mui/material' 
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react'
import UserBubble from './UserBubble'
import AIBubble from './AIBubble'

export default function Chatbox() {
    const [prompt, setPrompt] = useState('')

    return(
        <Box
        height="85vh"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        sx={{ marginTop: "100px"}}
        >
            <Box
            width="100%"
            maxWidth="1000px"
            sx={{
                marginBottom: "20px"
            }}
            >
                <Stack>
                    <UserBubble/>
                    <AIBubble/>
                </Stack>
            </Box>

            <Box
            border="1px solid red"
            borderRadius="30px"
            display="flex"
            alignItems="center"
            marginBottom={3}
            width="100%"
            maxWidth="600px"
            >
                <TextField
                placeholder="Ask TeslaGuideAI..."
                fullWidth
                sx={{
                    "& fieldset": {
                        border: "none"
                    }
                }}
                onChange={(e) => setPrompt(e.target.value)}
                />  
                    <IconButton 
                    //insert function to handle submit to AI chat generation
                    >
                        <SendIcon
                        sx={{ margin: "5px" }}
                        />
                    </IconButton>
            </Box>
        </Box>
    )
}