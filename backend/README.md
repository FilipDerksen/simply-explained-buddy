# Simply Explained Buddy - Backend

This is the backend API server for the Simply Explained Buddy application.

## Features

- **OpenAI Integration**: Uses OpenAI's GPT models to generate simple explanations
- **RESTful API**: Clean API endpoints for frontend communication
- **Error Handling**: Comprehensive error handling with fallbacks
- **CORS Support**: Configured for frontend-backend communication

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit `.env` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_openai_api_key_here
   ```

### 3. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and paste it in your `.env` file

### 4. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### Health Check
- **GET** `/health`
- Returns server status

### Generate Explanation
- **POST** `/api/explain`
- **Body**: `{ "question": "your question here" }`
- **Response**: `{ "explanation": "AI-generated explanation", "question": "original question" }`

## Error Handling

The API handles various error scenarios:
- Missing API key
- Invalid API key
- Quota exceeded
- Network errors
- Invalid requests

## Development

The backend is built with:
- **Express.js**: Web framework
- **OpenAI SDK**: Official OpenAI client
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## Troubleshooting

### Common Issues

1. **"OpenAI API key not configured"**
   - Make sure your `.env` file exists and contains a valid API key

2. **"CORS error"**
   - Ensure the frontend URL in `.env` matches your frontend server URL

3. **"Failed to generate explanation"**
   - Check your OpenAI API key and billing status
   - Verify you have sufficient API credits
