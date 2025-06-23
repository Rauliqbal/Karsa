import { prisma } from "../lib/prisma.js";
import fs from "fs";
import path from "path";

// Create Profile
export const createProfile = async (req, res) => {
  const { fullName, jobTitle, email, phone, address, website, linkedin } =
    req.body;

  const photoUrl = req.file ? req.file.filename : undefined;

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

// Get Profile
export const getProfile = async (req, res) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        userId: req.user.id,
      },
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mendapatkan profile",
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

// Update Profile
export const updateProfile = async (req, res) => {
  const { fullName, jobTitle, email, phone, address, website, linkedin } =
    req.body;

  const photoUrl = req.file ? req.file.filename : undefined;
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        userId: req.user.id,
      },
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile tidak ditemukan",
      });
    }

    // Hapus foto lama
    if (photoUrl && profile.photoUrl) {
      fs.unlink(path.join("uploads", profile.photoUrl), (err) => {
        if (err) console.error("Gagal hapus foto lama:", err.message);
      });
    }

    const updateProfile = await prisma.profile.update({
      where: {
        id: profile.id,
      },
      data: {
        fullName,
        jobTitle,
        email,
        phone,
        address,
        website,
        linkedin,
        ...(photoUrl && { photoUrl }),
      },
    });

    res.status(200).json({
      success: true,
      message: "Berhasil mengupdate profile",
      data: updateProfile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Delete Profile
export const deleteProfile = async (req, res) => {
  try {
    const profile = await prisma.profile.findUnique({
      where: {
        userId: req.user.id,
      },
    });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: "Profile tidak ditemukan",
      });
    }

    // Hapus foto lama
    if (profile.photoUrl) {
      fs.unlink(path.join("uploads", profile.photoUrl), (err) => {
        if (err) console.error("Gagal hapus foto lama:", err.message);
      });
    }

    await prisma.profile.delete({
      where: {
        id: profile.id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Berhasil menghapus profile",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
