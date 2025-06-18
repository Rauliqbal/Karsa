import { NextFunction, Request, Response } from "express";

export const accessValidation = (req:Request, res: Response, next:NextFunction) => {
  const {authorization} = req.headers

  if(!authorization) {
    return res.status(401).json({
      message: "Token invalid"
    })
  }

  const token = authorization.split('')[1]
}