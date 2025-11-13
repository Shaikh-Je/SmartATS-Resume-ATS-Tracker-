# SmartATS-Resume-ATS-Tracker-
 (requires OPENAI_API_KEY)  

# 🧠 SmartATS — AI-Powered Resume Tracking System

SmartATS (Resume ATS Tracker) is a full-stack **Applicant Tracking System (ATS)** built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**.
It enables recruiters to **post jobs, receive applications, parse resumes using AI**, and automatically **score candidates** based on job relevance.

## 🚀 Features

### 👥 User Management
* Secure **Signup/Login** for both **Admins (HRs)** and **Applicants**.
* **JWT-based Authentication** and role-based access control.

### 💼 Job Management (Admin)
* Create, update, delete, and manage job listings.
* Each job includes: title, description, department, experience level, location, and salary range.

### 🧾 Applicant Management
* Applicants can browse and apply for available jobs.
* Upload resumes in **PDF/DOCX** format (stored locally or on S3).
* Track application status: *Submitted*, *Shortlisted*, *Rejected*, or *Hired*.

### 🧠 AI-Powered Resume Parsing
* Automatic extraction of candidate data (**name, skills, education, experience**) from resumes using **OpenAI API or LangChain**.
* Matches resume content with job descriptions to generate a **Match Score (%)**.

### 📊 Dashboard & Analytics
* Admin dashboard showing:

  * Number of applicants per job
  * Average match scores
  * Hiring conversion rates
* Applicant dashboard for tracking application history and statuses.

### 📧 Email Notifications
* Sends confirmation emails after submission or status updates (via **Nodemailer**).

## 🧩 Tech Stack

| Layer              | Technology                         |
| :----------------- | :--------------------------------- |
| **Frontend**       | React.js, Tailwind CSS             |
| **Backend**        | Node.js, Express.js                |
| **Database**       | MongoDB (Mongoose ORM)             |
| **AI Integration** | OpenAI API / LangChain             |
| **Authentication** | JWT                                |
| **Deployment**     | Render / Vercel / Railway / Docker |

---
## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Shaikh-Je/SmartATS.git
cd SmartATS
```

### 2️⃣ Backend Setup
```bash
cd backend
cp .env.example .env
# Fill in MongoDB URI, JWT Secret, SMTP and OpenAI keys
npm install
npm run dev
```

Backend will start on **[http://localhost:5000](http://localhost:5000)**

### 3️⃣ Frontend Setup
```bash
cd ../frontend
cp .env.example .env
# Set REACT_APP_API_URL to http://localhost:5000
npm install
npm start
```

Frontend will start on **[http://localhost:3000](http://localhost:3000)*
---
## 📂 Folder Structure

```
SmartATS/
├── backend/
│   ├── server.js
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   ├── uploads/
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── index.jsx
│   └── .env.example
│
├── Dockerfile
└── README.md
```

---

## 🧪 API Endpoints

### 🔐 Authentication
| Method | Endpoint             | Description       |
| :----- | :------------------- | :---------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |

### 💼 Job Management
| Method | Endpoint        | Description                 |
| :----- | :-------------- | :-------------------------- |
| POST   | `/api/jobs/`    | Create new job (Admin only) |
| GET    | `/api/jobs/`    | View all jobs               |
| PUT    | `/api/jobs/:id` | Edit job (Admin only)       |
| DELETE | `/api/jobs/:id` | Delete job (Admin only)     |

### 📄 Applications
| Method | Endpoint                         | Description                                           |
| :----- | :------------------------------- | :---------------------------------------------------- |
| POST   | `/api/applications/:jobId/apply` | Apply to job (upload resume)                          |
| GET    | `/api/applications/`             | Get applications (Admin sees all, Applicant sees own) |
| PATCH  | `/api/applications/:id/status`   | Update application status (Admin only)                |

### 🤖 Resume Parsing
| Method | Endpoint            | Description                           |
| :----- | :------------------ | :------------------------------------ |
| POST   | `/api/parser/parse` | Parse and analyze resume using OpenAI |

---

## 🐳 Docker Support
You can also run the backend in Docker:

```bash
docker build -t smartats-backend .
docker run -p 5000:5000 smartats-backend
```

---

## 📬 Deployment Instructions
To deploy on **GitHub + Render/Vercel**:

```bash
git init
git add .
git commit -m "SmartATS initial commit"
git branch -M main
git remote add origin https://github.com/Shaikh-Je/SmartATS.git
git push -u origin main
```

Then connect your repository to **Render** (for backend) and **Vercel** (for frontend).

---

## 💡 Future Enhancements
* ✅ Full analytics dashboard with charts (Recharts / Chart.js)
* ✅ AI resume ranking improvements using embeddings
* ✅ Integrated interview scheduling system
* ✅ HR feedback and notes per candidate

---

## 👨‍💻 Author
**Shaikh Je**
🔗 [GitHub Profile](https://github.com/Shaikh-Je)
---

backend/ — Express.js API with:
Auth (register/login, JWT)
Jobs CRUD (admin)
Applications endpoints (apply with resume upload)
Parser route with example OpenAI call (requires OPENAI_API_KEY)
Mongoose models (User, Job, Application)
frontend/ — Minimal React + Tailwind skeleton (Jobs list, Login, Dashboard placeholder)
.env.example files and README.md with step-by-step local run and Git commands tailored for your GitHub profile (https://github.com/Shaikh-Je/<repo>.git)
Dockerfile (backend example)
.gitignore
