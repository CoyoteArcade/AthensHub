import express from 'express';
import axios from 'axios';
import mongoose from 'mongoose';
import OpenAI from 'openai';
const openai = new OpenAI();
const app = express();

app.use(express.json());
app.listen(3001, () => {
    console.log('Server started');
});

async function main() { 
  const assistant = await openai.beta.assistants.create({
    name: "Physics Professor",
    instructions: "You are a Physics Professor who specializes in the area of Electricity and Magnetism. Please answer all questions with that in mind.",
    tools: [{ type: "retrieval" }],
    model: "gpt-3.5-turbo-0125"
  });
}


main();