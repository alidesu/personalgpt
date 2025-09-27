# 🤖 PersonalGPT

PersonalGPT is a **RAG-enabled AI chatbot** designed as a personal assistant.  
It allows you to **upload your own documents** and then chat with an AI that retrieves and uses your personal knowledge base for accurate, contextual answers.

Built with **production-grade tools**:  
- Frontend → [Next.js](https://nextjs.org/) + [TailwindCSS](https://tailwindcss.com/)  
- Backend → [Express.js](https://expressjs.com/)  
- RAG → [LangChain](https://www.langchain.com/) + [HuggingFace embeddings](https://huggingface.co/)  
- Vector Database → [Supabase](https://supabase.com/)  
- LLMs → [OpenRouter APIs](https://openrouter.ai/) (e.g. Grok-4 Fast)  
- Auth → [Supabase Auth](https://supabase.com/docs/guides/auth)  
- DevOps → Docker + GitHub Actions (CI/CD)

---

## ✨ Features

- 🔐 **User Authentication** – Secure login & signup with Supabase Auth  
- 📂 **File Uploads** – Upload PDFs, TXT, DOCX, etc.  
- 🧠 **RAG Pipeline** – Documents converted into embeddings and stored in Supabase  
- 💬 **Chat Interface** – Ask questions, get answers powered by your personal data  
- ⚡ **Production-Ready Setup** – Dockerized environment, CI/CD with GitHub Actions  
- 🌐 **Scalable Architecture** – Clear separation of frontend, backend, and database  

---

## 🏗️ Project Structure

```
PersonalGPT/
│── frontend/       # Next.js frontend (Upload & Chat pages)
│── backend/        # Express.js backend (APIs for Auth, Upload, Chat)
│── docker-compose.yml
│── README.md
│── .env.example    # Environment variable template
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/PersonalGPT.git
cd PersonalGPT
```

### 2. Setup environment variables
Create a `.env` file at the root:
```
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
HF_API_KEY=your-huggingface-key
OPENROUTER_API_KEY=your-openrouter-key
```

### 3. Run with Docker
```bash
docker-compose up --build
```

- Frontend → http://localhost:3000  
- Backend → http://localhost:4000  

---

## 🛠️ Development Workflow

We follow **GitFlow** branching strategy:
- `main` → Production  
- `develop` → Staging  
- `feature/*` → Feature branches  

Run locally (without Docker):
```bash
# In frontend/
npm run dev

# In backend/
npm run dev
```

---

## 📚 Tech Stack

**Frontend:** Next.js, React, TailwindCSS, ShadCN/UI  
**Backend:** Express.js, Node.js  
**AI/RAG:** LangChain, HuggingFace Embeddings, OpenRouter API  
**Database:** Supabase (Postgres + Vector extension)  
**Auth:** Supabase Auth  
**DevOps:** Docker, Docker Compose, GitHub Actions  

---

## 🗺️ Roadmap

- [x] Project setup (Next.js, Express, Supabase)  
- [x] Authentication system  
- [ ] File upload & document ingestion  
- [ ] Embedding storage in Supabase  
- [ ] RAG-enabled chatbot  
- [ ] Streaming chat responses  
- [ ] Deploy frontend (Vercel) & backend (Railway/Render)  
- [ ] CI/CD with GitHub Actions  

---

## 📸 Screenshots / Demo
*(Coming soon)*  
- Upload page  
- Chat interface  
- Dashboard  

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and submit PRs.

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Muhammad Imtinan Farooq**  
- GitHub: [alidesu](https://github.com/alidesu)  
- LinkedIn: [imtinanfarooq](https://www.linkedin.com/in/imtinanfarooq/)  