import { Request, Response } from "express";

export const getUsers=async (req:Request,res:Response)=>
    {
        res.json({message:"hello"})
    }
    export const getUsersId=async (req:Request,res:Response)=>
        {
            res.json({message:"helo"})
        }
        