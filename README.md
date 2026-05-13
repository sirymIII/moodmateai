
# MoodMate AI

An AI-powered web chatbot for mental health management and emotional support.

## 🚀 How to Push to GitHub

If you are seeing errors in the terminal, follow these exact steps. 

### 1. Initialize and Stage
Run these commands in the terminal:
```bash
git init
git add .
git commit -m "Initial commit: Setup MoodMate AI"
```

### 2. Connect to your Repository
```bash
git branch -M main
git remote add origin https://github.com/sirymIII/moodmateai.git
```

### 3. Push to GitHub
```bash
git push -u origin main
```

**Note on Errors:** If GitHub asks for a password and your normal password doesn't work, you must use a **Personal Access Token (PAT)**. 
1. Go to GitHub Settings -> Developer Settings -> Personal Access Tokens -> Tokens (classic).
2. Generate a token with 'repo' permissions.
3. Use that token as your password when the terminal asks for it.

## 📥 How to Run Locally

Once the code is pushed, you can download it to your computer:

1. **Clone the repo:**
   ```bash
   git clone https://github.com/sirymIII/moodmateai.git
   cd moodmateai
   ```

2. **Install and Start:**
   ```bash
   npm install
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **AI**: Genkit + Gemini 2.5 Flash
- **Database/Auth**: Firebase (Client SDK)
- **Styling**: Tailwind CSS + ShadCN UI
