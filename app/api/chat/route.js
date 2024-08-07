import { model } from '@/gemini'
import { NextResponse } from 'next/server'

export async function POST(req){
    async function run() {
        const prompt = "Write a small paragraph about NYC"
    
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
    }

    run();
    
    return NextResponse(text)
}