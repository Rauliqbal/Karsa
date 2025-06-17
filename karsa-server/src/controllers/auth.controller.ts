import { Request, Response } from "express";
import { hashPassword } from "../utils/hash";
import { prisma } from "../lib/prisma";

// Function Register
export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, password } = req.body;

  const checkEmail = await prisma.user.findUnique({
    where: { email },
  });
  if (checkEmail) {
    res.status(400).json({
      message: "Email sudah digunakan",
    });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  const { password: _, ...userWithoutPassword } = user;

  res.status(201).json({
    message: "Registrasi berhasil",
    data: userWithoutPassword,
  });
};

// Function Login
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
};
