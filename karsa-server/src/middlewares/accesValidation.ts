import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const accessValidation = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      message: "Token tidak ditemukan atau format salah",
    });

    return;
  }

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN as string);
    (req as any).user = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Token tidak valid atau sudah kedaluwarsa",
    });
    return;
  }
};
