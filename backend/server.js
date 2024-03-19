import express from 'express';
import mongoose from 'mongoose';
import OpenAI from 'openai';
import dotenv from 'dotenv';
import axios from 'axios';
import cors from 'cors';
dotenv.config();
// const openai = new OpenAI({
//   apiKey: process.env.OPEN_AI_KEY
// });
const PORT = process.env.PORT || 3001;
const app = express();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

app.use(express.json());
// add cors to allow cross origin requests
app.use(cors());

async function main() { 
  // create a new assistant
  // const assistant = await openai.beta.assistants.create({
  //   name: "Physics Professor",
  //   instructions: "You are a Physics Professor who specializes in the area of Electricity and Magnetism. Please answer all questions with that in mind.",
  //   tools: [{ type: "retrieval" }],
  //   model: "gpt-3.5-turbo-0125"
  // });
  // retrieve list of assistants
  // const assistants = await openai.beta.assistants.list();
}


// create a course schema where each course has a name, summary, questions separated by chapters and answers
const courseSchema = new mongoose.Schema({
  name: String,
  summary: String,
  subject: String,
  downloadLink: String,
  bookLink: String,
  chapters: [{
    name: String,
    questions: [{
      question: String,
      choices: [String],
      answer: String
    }]
  }],
  tableOfContents: [
    {chapter: String, sections: [String]}
  ]
});

const Course = mongoose.model('Course', courseSchema);

// create a get request to retrieve all courses
app.get('/api/courses', async (req, res) => {
  console.log('GET request received');
  const courses = await Course.find({});
  res.send(courses);
});

// create a get request to retrieve a course by name
app.get('/api/courses/:name', async (req, res) => {
  const decodedName = decodeURI(req.params.name);
  const course = await Course.findOne({name: decodedName});
  console.log(course);
  res.send(course);
});

// main();
// connect to mongodb
//Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
})