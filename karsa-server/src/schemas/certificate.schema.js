import { z } from "zod";

export const certificateSchema = z.object({
  name: z.string().min(1, "Nama wajib diisi"),
  issuer: z.string().min(1, "Penerbit wajib diisi"),
  issuedAt: z.string().min(1, "Tanggal dikeluarkan wajib diisi"),
  link: z.string().min(1, "Link wajib diisi"),
});
