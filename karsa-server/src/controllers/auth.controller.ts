import { Request, Response } from "express";
import { hashPassword } from "../utils/hash";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  res.status(201).json({
    sucess: true,
    message: "Registrasi berhasil",
    data: user,
  });
};

// Function Login
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    res.status(404).json({ message: "Email tidak ditemukan" });
    return;
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    res.status(401).json({ message: "Password salah" });
    return;
  }

  const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN as string, {
    expiresIn: "1d",
  });

  const { password: _, ...userWithoutPassword } = user;

  res.status(200).json({
    success: true,
    message: "Login berhasil",
    data: {
      user: userWithoutPassword,
      token,
    },
  });
};

// Function Get User
export const getUser = async (
  req: Request & { user?: { id: string } },
  res: Response
): Promise<void> => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user?.id,
    },
  });

  if (!user) {
    res.status(404).json({ success: false, message: "User not found" });
    return;
  }

  res.status(200).json({
    success: true,
    message: "Berhasil mendapatkan data user",
    data: user,
  });
};
