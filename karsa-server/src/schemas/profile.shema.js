import { z } from "zod";

export const profileSchema = z.object({
  fullName: z.string().min(1, "Nama lengkap wajib diisi").max(100).optional(),
  jobTitle: z.string().max(100).optional(),
  email: z.string().email("Email tidak valid").optional(),
  phone: z
    .string()
    .regex(/^[0-9+()\-\s]+$/, "Nomor telepon tidak valid")
    .optional(),
  address: z.string().max(255).optional(),
  website: z
    .string()
    .url("Format URL website tidak valid")
    .optional()
    .or(z.literal("").transform(() => undefined)),
  linkedin: z
    .string()
    .url("Format URL LinkedIn tidak valid")
    .optional()
    .or(z.literal("").transform(() => undefined)),
  photoUrl: z.string().optional(),
});
