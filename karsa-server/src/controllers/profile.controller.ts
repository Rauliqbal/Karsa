import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export const createProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    fullName,
    jobTitle,
    email,
    phone,
    address,
    website,
    linkedin,
    github,
  } = req.body;
  const photoUrl = req.file ? `uploads/${req.file.filename}` : null;

  const profile = await prisma.profile.create({
    data: {
      fullName,
      jobTitle,
      email,
      phone,
      address,
      website,
      linkedin,
      github,
      photoUrl,
      userId: (req as any).user?.id,
    },
  });

  res.status(200).json({
    success: true,
    message: "Berhasil mendapatkan data profile",
    data: profile,
  });
};
