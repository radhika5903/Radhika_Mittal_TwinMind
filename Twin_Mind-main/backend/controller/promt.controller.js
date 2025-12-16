import { GoogleGenAI } from "@google/genai";
import { Promt } from "../model/promt.model.js";

const ai = new GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});
console.log(ai.apiKey);
export const sendPromt=async (req,res)=>{
   const {content}=req.body
   const userId=req.userId
   if(!content || content.trim()===""){
    return res.status(400).json({errors:"Promt content is required"})
   } 

   try {
    //save user promt
    const userPromt = await Promt.create({
      userId,
        role:"user",
        content
    })

    //send to gemini ai
    const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: [
    {
      role: "user",
      parts: [{ text: content }]
    }
  ]
});
const aiContent=response.text;
console.log(aiContent);
  //save assisstant promt
   const aiMessage = await Promt.create({
        userId,
        role:"assisstant",
        content:aiContent
    })
    return res.status(200).json({reply:aiContent})
   } catch (error) {
    console.log("Error in Promt :", error)
    return res.status(500).json({error:"Something went wrong with AI response"})
   }
};