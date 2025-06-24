import { prisma } from "../lib/prisma.js";

// Create CV
export const createCv = async (req, res) => {
  const { title, summary, template, isPublished } = req.body;

  try {
    const cv = await prisma.cV.create({
      data: {
        title,
        summary,
        template,
        isPublished,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Berhasil membuat CV",
      data: cv,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Get all CV
export const getALlCv = async (req, res) => {
  try {
    const cv = await prisma.cV.findMany({
      where: {
        userId: req.user.id,
      },
    });

    if (!cv) {
      return res.status(404).json({
        success: false,
        message: "CV tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mendapatkan semua CV",
      data: cv,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Get CV by ID
export const getCvById = async (req, res) => {
  const { id } = req.params;

  try {
    const cv = await prisma.cV.findUnique({
      where: {
        id,
      },
    });

    if (!cv) {
      return res.status(404).json({
        success: false,
        message: "CV tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Berhasil mendapatkan CV",
      data: cv,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Delete CV
export const deleteCv = async (req, res) => {
  const { id } = req.params;

  try {
    const cv = await prisma.cV.findUnique({
      where: {
        id,
      },
    });

    if (!cv) {
      return res.status(404).json({
        success: false,
        message: "CV tidak ditemukan",
      });
    }

    await prisma.cV.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: "Berhasil menghapus CV",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
