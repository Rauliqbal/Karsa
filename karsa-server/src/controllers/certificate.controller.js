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

// Get Certificate
export const getCertificate = async (req, res) => {
  try {
    const cv = await prisma.cV.findUnique({
      where: { userId: req.user.id },
    });

    const certificate = await prisma.certificate.findMany({
      where: {
        cvId: cv.id,
      },
    });
    res.status(200).json({
      success: true,
      message: "Berhasil mendapatkan certificate",
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

// Update Certificate
export const updateCertificate = async (req, res) => {
  const { id } = req.params;
  const { name, issuer, issuedAt, link } = req.body;
  try {
    const certificate = await prisma.certificate.findUnique({
      where: {
        id,
      },
      include: {
        cv: true,
      },
    });
    if (!certificate)
      res.status(404).json({
        success: false,
        message: "Certificate tidak ditemukan",
      });

    if (certificate.cv.userId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Anda tidak berhak mengubah certificate ini",
      });
    }

    const updated = await prisma.certificate.update({
      where: {
        id,
      },
      data: {
        name,
        issuer,
        issuedAt,
        link,
      },
    });

    res.status(200).json({
      success: true,
      message: "Berhasil memperbarui certificate",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
