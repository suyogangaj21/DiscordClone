 import {NextFunction } from "express";
 import catchAsyncError from "../middlewares/catchAsyncError";
 import ErrorHandler from "../utils/ErrorHandler";
 import { Request,Response } from "express";
 import { PrismaClient } from "@prisma/client";

 const prisma=new PrismaClient();

 export const allusers=catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
           const user=await prisma.user.findMany();
       
           console.log(user,"ok");
           
           if (!user){
                return next(new ErrorHandler("No User Found",400));}
           return res.status(201).json({user});
   
        
 }
)