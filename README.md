# SmartATS — Ready-to-run repository package

This package contains a minimal, functional MERN stack skeleton for **SmartATS** (Resume ATS Tracker).
It is prepared for you (GitHub user: Shaikh-Je).

## Contents
- backend/ — Express + MongoDB API
- frontend/ — React + Tailwind skeleton (minimal pages)
- README files inside each part with run instructions

## Quick local run (development)

Prereqs: Node 18+, npm, MongoDB running locally

1. Backend:
```bash
cd backend
cp .env.example .env
# edit .env to set MONGO_URI and JWT_SECRET, OPENAI_API_KEY if you want parser
npm install
npm run dev
```

2. Frontend:
You can run using Create React App or Vite setup. Basic files are provided under frontend/src.
Set environment variable REACT_APP_API_URL to your backend (example: http://localhost:5000).

## Push to your GitHub (commands adapted to your profile)
Replace <repo> with your desired repo name (e.g. SmartATS)
```bash
git init
git add .
git commit -m "Initial SmartATS skeleton"
git branch -M main
git remote add origin https://github.com/Shaikh-Je/<repo>.git
git push -u origin main
```

## Notes & Next steps (what I implemented and what is left)
- Authentication, jobs CRUD, applications upload endpoints implemented.
- Resume parsing endpoint includes a placeholder example demonstrating how to call OpenAI — you must set OPENAI_API_KEY.
- Email sending is not wired into application flow (nodemailer available) — configure SMTP in .env.
- Frontend is minimal; I set up basic login and job-list pages to connect to the API.
- For production deploy, consider using S3 for resumes, secure env vars for API keys, and CI/CD via GitHub Actions or Render.

If you want, I can:
- Expand frontend into a complete React app with Tailwind UI and forms for admin CRUD and apply flow.
- Wire real resume parsing using OpenAI responses and compute a match score between job description and parsed resume.
- Generate GitHub Actions workflow for automated deploy to Render/Vercel and provide the final repo ready to push.

