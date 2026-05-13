# MoodMate AI

An AI-powered web chatbot for mental health management and emotional support.

## Getting Started (Download & Push)

To get this code onto your local machine, follow these steps:

### 1. Push from this environment to GitHub
Run these commands in the terminal here:

```bash
git init
git add .
git commit -m "Initial commit: Setup MoodMate AI platform"
git branch -M main
git remote add origin https://github.com/sirymIII/moodmateai.git
git push -u origin main
```

### 2. Download to your local machine
Once pushed, open a terminal on your computer and run:

```bash
git clone https://github.com/sirymIII/moodmateai.git
cd moodmateai
```

### 3. Local Setup
After cloning, install the dependencies and start the development server:

```bash
npm install
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **State Management**: Zustand
- **AI Engine**: Genkit with Google Gemini 2.5 Flash
- **Icons**: Lucide React

## Project Features

- **Empathetic AI Chat**: Real-time emotional support.
- **Mood Dashboard**: Visualize emotional trends with Recharts.
- **Resource Center**: Articles on mental health and drug abuse.
- **Crisis Help**: Immediate access to support lifelines.
- **Admin Portal**: Platform oversight and security monitoring.
- **Responsive Design**: Optimized for mobile and desktop.
