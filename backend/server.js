import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { config } from './config.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = config.server.port;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: config.openai.apiKey,
});

// Middleware
app.use(cors({
  origin: config.cors.origin,
  credentials: config.cors.credentials
}));
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend server is running' });
});

// Main explanation endpoint
app.post('/api/explain', async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({ 
        error: 'Question is required' 
      });
    }

    if (!config.openai.apiKey) {
      return res.status(500).json({ 
        error: 'OpenAI API key not configured' 
      });
    }

    // Create the prompt for simple explanations
    const systemPrompt = `You are an expert at explaining complex topics in simple, easy-to-understand terms. 
    Your explanations should be:
    - Written for a general audience (no technical jargon)
    - Use analogies and everyday examples
    - Be concise but comprehensive
    - Friendly and engaging tone
    - Focus on the core concept, not every detail`;

    const userPrompt = `Please explain this in simple terms: "${question}"`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: config.openai.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      max_tokens: config.api.maxTokens,
      temperature: config.api.temperature,
    });

    const explanation = completion.choices[0]?.message?.content;

    if (!explanation) {
      throw new Error('No explanation generated');
    }

    res.json({ 
      explanation,
      question: question.trim()
    });

  } catch (error) {
    console.error('Error generating explanation:', error);
    
    // Handle different types of errors
    if (error.code === 'insufficient_quota') {
      return res.status(402).json({ 
        error: 'OpenAI API quota exceeded. Please check your billing.' 
      });
    }
    
    if (error.code === 'invalid_api_key') {
      return res.status(401).json({ 
        error: 'Invalid OpenAI API key' 
      });
    }

    res.status(500).json({ 
      error: 'Failed to generate explanation. Please try again.' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error' 
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Endpoint not found' 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📡 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 API endpoint: http://localhost:${PORT}/api/explain`);
});
