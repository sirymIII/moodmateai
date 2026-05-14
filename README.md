
# MoodMate AI

An AI-powered web chatbot for mental health management and emotional support.

## 🚀 How to Fix the Git Push Error

If you see the error `! [rejected] main -> main (non-fast-forward)`, it's because GitHub has files (like a default README) that you don't have locally. 

**Follow these exact steps in your terminal to fix it:**

### 1. Force the Push
Since this is your first time setting up the repository, you can safely "force" your local code to overwrite the remote one:

```bash
git push -u origin main --force
```

### 2. If GitHub asks for a Password
GitHub **does not** accept your normal account password in the terminal. You must use a **Personal Access Token (PAT)**:

1. Go to GitHub **Settings** -> **Developer Settings** -> **Personal Access Tokens** -> **Tokens (classic)**.
2. Generate a new token with the **'repo'** permission checked.
3. **Copy the token.**
4. When the terminal asks for your password, **paste the token** instead.

## 📥 How to Run Locally

Once the code is pushed, you can download it to any computer:

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
   The app will be available at `http://localhost:9002`.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **AI**: Genkit + Gemini 2.5 Flash
- **Database/Auth**: Firebase (Client SDK)
- **Styling**: Tailwind CSS + ShadCN UI
