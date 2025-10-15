# Simply Explained Buddy - Full Stack Setup

This guide explains how to set up both the frontend and backend for the Simply Explained Buddy application.

## Project Structure

```
simply-explained-buddy/
├── src/                    # Frontend (React/Vite)
│   ├── pages/
│   ├── components/
│   └── ...
├── backend/                # Backend (Express.js)
│   ├── server.js
│   ├── package.json
│   └── .env
└── package.json           # Frontend dependencies
```

## Quick Start

### 1. Frontend Setup (Already Done)

The frontend is already set up and ready to go:

```bash
# Install frontend dependencies
npm install

# Start frontend development server
npm run dev
```

Frontend runs on: `http://localhost:5173`

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Set up environment variables
cp env.example .env
# Edit .env and add your OpenAI API key

# Start backend server
npm run dev
```

Backend runs on: `http://localhost:3001`

### 3. Get OpenAI API Key (Optional)

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Go to API Keys section
4. Create a new secret key
5. Copy the key and add it to `backend/.env`:

```
OPENAI_API_KEY=sk-your-actual-key-here
```

**Note**: The app works perfectly without an API key using example explanations!

## Running Both Servers

You need to run both servers simultaneously:

**Terminal 1 (Frontend):**
```bash
npm run dev
```

**Terminal 2 (Backend):**
```bash
cd backend
npm run dev
```

## How It Works

1. **User enters a question** in the frontend
2. **Frontend sends request** to backend API (`/api/explain`)
3. **Backend calls OpenAI** with the question
4. **OpenAI generates explanation** using GPT model
5. **Backend returns explanation** to frontend
6. **Frontend displays result** to user

## Fallback Behavior

If the backend is not running, the frontend will:
- Show an error message
- Fall back to mock explanations
- Still work with example prompts

## Production Deployment

### Frontend
- Build: `npm run build`
- Deploy to Vercel, Netlify, or similar

### Backend
- Deploy to Railway, Render, Heroku, or similar
- Update frontend API URL to production backend URL

## Environment Variables

### Backend (.env)
```
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-3.5-turbo
PORT=3001
FRONTEND_URL=http://localhost:5173
```

### Frontend
Update the API URL in `src/pages/Index.tsx` if deploying to production:
```javascript
const response = await fetch('https://your-backend-url.com/api/explain', {
  // ... rest of the code
});
```

## Troubleshooting

### Backend Issues
- Check if OpenAI API key is valid
- Verify backend server is running on port 3001
- Check console for error messages

### Frontend Issues
- Ensure backend is running
- Check browser console for CORS errors
- Verify API endpoint URL is correct

### Common Solutions
1. **CORS errors**: Make sure `FRONTEND_URL` in backend `.env` matches your frontend URL
2. **API key errors**: Verify your OpenAI API key is correct and has credits
3. **Connection errors**: Ensure both servers are running simultaneously
