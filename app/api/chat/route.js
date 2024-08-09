import { model } from '@/gemini';
import { NextResponse } from 'next/server'

let conversationHistory = []; //conversation history 

  
  export async function POST(req) {
    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };
  
    const userInput = req // Get user input from the request body
  
    async function run() {
      // Add the new user input to the conversation history
      conversationHistory.push({
        role: "user",
        parts: [{ text: userInput }],
      });
  
      const chatSession = model.startChat({
        generationConfig,
        history: conversationHistory, // Use the updated conversation history
      });
  
      // Send the user's input to the chat session
      const result = await chatSession.sendMessage(userInput);
  
      // Get the model's response
      const modelResponse = result.response.text();
  
      // Add the model's response to the conversation history
      conversationHistory.push({
        role: "model",
        parts: [{ text: modelResponse }],
      });
    
  
      // Return the model's response
      return modelResponse;
    }
  
    const text = await run();
    
    return text
  }