import { prisma } from "../lib/prisma.js";

// Create Profile
export const createProfile = async (req, res) => {
  const { fullName, jobTitle, email, phone, address, website, linkedin } =
    req.body;

  const photoUrl = req.file ? req.file.filename : null;

  try {
    const profile = await prisma.profile.create({
      data: {
        fullName,
        jobTitle,
        email,
        phone,
        address,
        website,
        linkedin,
        photoUrl,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Berhasil membuat profile",
      data: profile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
