import { GoogleGenerativeAI,HarmBlockThreshold,HarmCategory } from "@google/generative-ai";

import fs from "node:fs"; 
import mime from "mime-types";

  
  const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
  };
  
  
    export const AiChatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
