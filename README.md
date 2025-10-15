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
- OpenAI API key

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

4. **Configure OpenAI API**
   - Get your API key from [OpenAI Platform](https://platform.openai.com/)
   - Add it to `backend/.env`:
     ```
     OPENAI_API_KEY=your_api_key_here
     ```

### Running the Application

**Terminal 1 (Frontend):**
```bash
npm run dev
```
Frontend runs on: http://localhost:5173

**Terminal 2 (Backend):**
```bash
cd backend
npm run dev
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
OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-3.5-turbo
PORT=3001
FRONTEND_URL=http://localhost:5173
```

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

## 🔗 Links

- **Original Lovable Project**: https://lovable.dev/projects/7f6f33f1-7392-4985-a5fd-5fd6ffe93530
- **OpenAI Platform**: https://platform.openai.com/
- **Documentation**: See `SETUP.md` for detailed setup instructions
