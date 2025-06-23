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
