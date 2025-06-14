import express from "express";
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"

const app = express()
dotenv.config() //try to figure out the importance of this line.

const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log("server is running on port 5001")
    connectDB()
})