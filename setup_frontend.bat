@echo off
echo ===========================================
echo NanoHealth Frontend Setup
echo ===========================================

cd frontend

echo 1. Installing dependencies...
call npm install
call npm install -D tailwindcss postcss autoprefixer
call npm install react-router-dom clsx tailwind-merge lucide-react recharts

echo.
echo 2. Initializing Tailwind...
call npx tailwindcss init -p

echo.
echo 3. Starting Development Server...
call npm run dev
