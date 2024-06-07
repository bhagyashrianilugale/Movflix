import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_KEY } from "./Constants";

// Gemini API_key set up
const genAI = new GoogleGenerativeAI(GEMINI_KEY);

export default genAI;

