import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/user.route.js"
import promtRoutes from "./routes/promt.route.js"
import cors from "cors";
dotenv.config()

const app = express();
const port = process.env.PORT || 3001;
const MONGO_URL=process.env.MONGO_URL;


// middleware
app.use(express.json());
app.use(cookieParser());//frontend mai use kar payenge iss se 
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "https://chatgpt-clone-navy-seven.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get('/', (req, res) => {
  res.send('Hello world')
})
// db connection here
mongoose.connect(MONGO_URL).
then(()=>console.log("Connected to MongoDB"))
.catch((error)=>console.error("MongoDB Connection Error:",error));

// routes
app.use("/api/v1/user",userRoutes);
app.use("/api/v1/chatgpt",promtRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
}).on('error', (err) => {
  console.error('Server failed to start:', err);
});
