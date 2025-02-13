import express, { NextFunction, Request, Response } from "express"
import "dotenv/config"
//impoting routes
import userRoutes from "./routes/userRoutes"
const app=express();
const PORT=process.env.PORT || 5000
app.use("/api/users",userRoutes)
app.listen(PORT,()=>
    {
        console.log(`Server is running at http://localhost:${PORT}`)
    })
