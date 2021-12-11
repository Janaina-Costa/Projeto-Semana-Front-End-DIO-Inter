import { NextFunction, Request,response,Response } from "express";
import AppError from "../shared/error/appError";

function globalErrors(err:Error, request:Request, resposnse:Response, next:NextFunction){
    if(err instanceof AppError){
        resposnse.status(err.statusCode).json({
            status:'error',
            message:err.message,
            data:err?.data
        })
    }

    console.log(err);

    return response.status(500).json({
        status:'error',
        message:'Internal server error'
    })
}

export {globalErrors}