import { Request, Response } from "express";
import { hashPassword } from "../utils/hash";
import { prisma } from "../lib/prisma";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
export const loginUser = async (req: Request, res: Response):Promise<void> => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: {email},
    select: {
      id: true,
      email: true,
      password: true
    }
  })
  if(!user) {
    res.status(404).json({
      message:"Email tidak ada"
    })
    return
  }

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    res.status(404).json({
     message: "Password tidak sesuai"
    })
    return
  }
  
  const token = jwt.sign({id:user.id}, process.env.SECRET_TOKEN as string, {expiresIn: "1d"})

  const { password: _, ...userWithoutPassword } = user;
    res.status(200).json({
      success: true,
      message: "Berhasil login",
      data: {
        user: userWithoutPassword,
        token: token,
      },
    });
};
