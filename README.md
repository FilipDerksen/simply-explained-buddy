# Simply Explained Buddy

A modern web application that transforms complex topics into simple, easy-to-understand explanations using AI. Built with React, Express.js, and OpenAI integration.

## ✨ Features

- **AI-Powered Explanations**: Uses OpenAI's GPT models to generate simple explanations
- **Interactive UI**: Beautiful, responsive interface with smooth animations
- **Smart Fallbacks**: Works offline with mock explanations when backend is unavailable
- **Real-time Processing**: Get instant explanations with loading states
- **Example Prompts**: Pre-built examples to get you started

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenAI API key (optional - app works without it!)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FilipDerksen/simply-explained-buddy.git
   cd simply-explained-buddy
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Set up the backend**
   ```bash
   cd backend
   npm install
   cp env.example .env
   ```

4. **Configure OpenAI API (Optional)**
   - Get your API key from [OpenAI Platform](https://platform.openai.com/)
   - Add it to `backend/.env`:
     ```
     OPENAI_API_KEY=sk-your-actual-key-here
     ```
   - **Note**: The app works perfectly without an API key using example explanations!

### Running the Application

**Option 1: Run Everything with One Command (Recommended)**
```bash
npm run dev:full
```
This starts both frontend and backend simultaneously.

**Option 2: Run Separately**
**Terminal 1 (Frontend):**
```bash
npm run dev
```
Frontend runs on: http://localhost:8080

**Terminal 2 (Backend):**
```bash
npm run dev:backend
```
Backend runs on: http://localhost:3001

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **React Query** for state management

### Backend
- **Express.js** server
- **OpenAI API** integration
- **CORS** enabled for frontend communication
- **Error handling** with graceful fallbacks

## 📁 Project Structure

```
simply-explained-buddy/
├── src/                    # Frontend React app
│   ├── components/         # Reusable UI components
│   ├── pages/            # Application pages
│   └── lib/              # Utilities and helpers
├── backend/               # Express.js backend
│   ├── server.js         # Main server file
│   ├── config.js         # Configuration
│   └── .env             # Environment variables
└── SETUP.md             # Detailed setup guide
```

## 🔧 Configuration

### Environment Variables

**Backend (.env):**
```
OPENAI_API_KEY=sk-your-actual-key-here
PORT=3001
FRONTEND_URL=http://localhost:8080
```

**Note**: `OPENAI_MODEL` is optional and defaults to `gpt-3.5-turbo`

### API Endpoints

- `GET /health` - Server health check
- `POST /api/explain` - Generate explanation
  ```json
  {
    "question": "What is quantum computing?"
  }
  ```

## 🎨 Customization

### Adding New Features
- Frontend components: `src/components/`
- Backend routes: `backend/server.js`
- Styling: Tailwind CSS classes

### Deployment
- **Frontend**: Deploy to Vercel, Netlify, or similar
- **Backend**: Deploy to Railway, Render, or Heroku

## 🐛 Troubleshooting

### Common Issues

1. **"Backend Connection Failed"**
   - Ensure backend server is running
   - Check if OpenAI API key is configured

2. **CORS Errors**
   - Verify `FRONTEND_URL` in backend `.env`

3. **API Key Issues**
   - Confirm OpenAI API key is valid
   - Check billing status on OpenAI platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 CI/CD Pipeline

This project includes automated CI/CD using GitHub Actions:

### **Automated Workflows:**
- **CI**: Runs on every pull request - tests, lints, and builds
- **Staging**: Auto-deploys to staging on merge to main
- **Production**: Manual deployment with approval gate

### **Required GitHub Secrets:**
Set these in your repository settings:

**For Frontend Deployment:**
- `VERCEL_TOKEN` - Vercel deployment token
- `VERCEL_ORG_ID` - Vercel organization ID
- `VERCEL_PROJECT_ID` - Vercel project ID

**For Backend Deployment:**
- `RAILWAY_TOKEN` - Railway deployment token
- `RAILWAY_SERVICE_ID` - Railway service ID

**Optional:**
- `OPENAI_API_KEY` - OpenAI API key (only needed for AI features)

### **Deployment Process:**
1. **Pull Request** → Automated testing and linting
2. **Merge to main** → Automatic staging deployment (frontend only)
3. **Manual trigger** → Production deployment (frontend only)

**Note**: Backend deployment is handled separately by Railway, not through GitHub Actions.

## 🔗 Links

- **Original Lovable Project**: https://lovable.dev/projects/7f6f33f1-7392-4985-a5fd-5fd6ffe93530
- **OpenAI Platform**: https://platform.openai.com/
- **Documentation**: See `SETUP.md` for detailed setup instructions
