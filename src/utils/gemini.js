import { GoogleGenerativeAI } from "@google/generative-ai";
const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;

// Gemini API_key set up
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

export default genAI;

