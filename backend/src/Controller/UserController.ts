 import {NextFunction } from "express";
 import catchAsyncError from "../middlewares/catchAsyncError";
 import ErrorHandler from "../utils/ErrorHandler";
 import { Request,Response } from "express";
 import { PrismaClient } from "@prisma/client";

 const prisma=new PrismaClient();

 export const Login=catchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
           let user=await prisma.user.findUnique({where:{
              email:req.body.email
           }});
       
           console.log(user,"ok");
           
           if (!user){
               user=await prisma.user.create({data:{...req.body}})
           }
           if(!user){
               return new ErrorHandler("Something went Wrong!",401);
           }

           return res.status(201).json({user}); 
          
          }
) 

