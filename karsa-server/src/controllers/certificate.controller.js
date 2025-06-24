import express from "express";
import { prisma } from "../lib/prisma.js";

// Create Certificate
export const createCertificate = async (req, res) => {
  const { name, issuer, issuedAt, link } = req.body;
  try {
    const cv = await prisma.cV.findUnique({
      where: { userId: req.user.id },
    });

    if (!cv || cv.userId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "CV tidak ditemukan atau bukan milik Anda",
      });
    }

    const certificate = await prisma.certificate.create({
      data: {
        cvId: cv.id,
        name,
        issuer,
        issuedAt,
        link,
      },
    });
    res.status(201).json({
      success: true,
      message: "Berhasil membuat certificate",
      data: certificate,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
