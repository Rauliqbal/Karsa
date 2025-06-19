# ✨ KarsaCV — Generator CV Profesional Online

**KarsaCV** adalah platform pembuatan CV modern yang membantu siapa saja — dari pelajar hingga profesional — menyusun Curriculum Vitae yang rapi, menarik, dan siap pakai, secara gratis dan mudah.

> Kata _"Karsa"_ dalam bahasa Jawa berarti **niat, kehendak, atau semangat** — merepresentasikan semangat setiap individu dalam menata masa depan dan meraih peluang karier terbaik.

---

## 🎯 Tujuan

- Membantu pengguna membuat dan mengunduh CV profesional berbasis web.
- Menyediakan template modern dan preview real-time.
- Mendukung ekspor dalam berbagai format: PDF, Word, JSON.

---

## 🚀 Fitur Utama

- Autentikasi (NextAuth/Clerk/guest mode)
- Form builder data CV:
  - Data pribadi
  - Pendidikan
  - Pengalaman kerja
  - Keahlian & proyek
- Template desain CV (Minimalis, Modern, Kreatif)
- Live preview
- Download sebagai PDF (via API)
- Simpan versi CV
- Link publik ke CV online
- Ekspor ke Word & JSON (premium)

---

## 👥 Target Pengguna

- Pelajar & Fresh Graduate
- Developer & Freelancer
- HR atau lembaga pendidikan
- UMKM & Institusi perekrut

---

## 🧱 Stack Teknologi

### Frontend (`/karsa-client`)

- Nuxt 3
- Tailwind CSS
- Pinia

### Backend (`/karsa-server`)

- Express.js + TypeScript
- Prisma ORM + MySQL
- Puppeteer/pdf-lib (generate PDF)

---

## ⚙️ Cara Instalasi

### 📦 1. Clone Repository

```bash
git clone https://github.com/namakamu/karsa-cv.git
cd karsa-cv
```

### 📦 2. Setup Backend

```bash
cd backend
cp .env.example .env
pnpm install
npx prisma generate
npx prisma migrate dev
```

#### 📁 contoh .env (backend)

```bash
DATABASE_URL=mysql://user:password@localhost:3306/karsadb
SECRET_TOKEN=supersecretkey
```

### 🌐 3. Setup Frontend

```bash
cd ../karsa-client
cp .env.example .env
pnpm install
```

#### 📁 contoh .env (Frontend)

```bash
NUXT_API_URL=http://localhost:3001/api/v1
```

### 🔭 Pengembangan Mendatang

- CV multilingual
- Admin dashboard untuk institusi/HR
- Integrasi ATS check dan AI saran perbaikan CV
