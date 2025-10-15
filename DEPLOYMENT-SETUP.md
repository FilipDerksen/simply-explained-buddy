# 🚀 Deployment Setup Guide

## Frontend Deployment (Vercel)

### 1. Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub
- Import `simply-explained-buddy` repository

### 2. Get Vercel Credentials
- Go to [Account Tokens](https://vercel.com/account/tokens)
- Create new token → Copy token
- Go to Project Settings → General
- Copy Project ID and Team/User ID

### 3. Configure Build Settings
In Vercel project settings:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Backend Deployment (Railway)

### 1. Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign up with GitHub
- Create new project

### 2. Deploy Backend
- Connect GitHub repository
- Select `backend` folder as root
- Railway will auto-detect Node.js

### 3. Configure Environment Variables
In Railway dashboard → Variables:
```
OPENAI_API_KEY=your_openai_key_here
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://your-frontend.vercel.app
```

## GitHub Secrets Setup

Go to Repository → Settings → Secrets and variables → Actions

### Required Secrets:
```
VERCEL_TOKEN=vercel_your_token_here
VERCEL_ORG_ID=your_org_id_here
VERCEL_PROJECT_ID=prj_your_project_id_here
RAILWAY_TOKEN=your_railway_token_here
RAILWAY_SERVICE_ID=your_service_id_here
```

### After First Deployment:
```
STAGING_FRONTEND_URL=https://your-app-git-main-username.vercel.app
STAGING_BACKEND_URL=https://your-backend-production.up.railway.app
PRODUCTION_FRONTEND_URL=https://your-app.vercel.app
PRODUCTION_BACKEND_URL=https://your-backend-production.up.railway.app
```

## Testing Deployment

### 1. Test Staging Deployment
- Push to main branch
- Check GitHub Actions → Deploy to Staging
- Verify both frontend and backend deploy successfully

### 2. Test Production Deployment
- Go to Actions → Deploy to Production
- Click "Run workflow"
- Approve the deployment

### 3. Verify Health Checks
- Frontend should load at your Vercel URL
- Backend health check: `https://your-backend.railway.app/health`
- API test: `https://your-backend.railway.app/api/explain`

## Troubleshooting

### Common Issues:
1. **Build failures**: Check Node.js version (use 18.x)
2. **Environment variables**: Ensure all required vars are set
3. **CORS errors**: Update FRONTEND_URL in backend
4. **API key issues**: Verify OpenAI key is valid and has credits

### Debug Steps:
1. Check deployment logs in Vercel/Railway
2. Check GitHub Actions logs
3. Test endpoints manually
4. Verify environment variables

## Next Steps After Setup

1. **Enable branch protection** (Settings → Branches)
2. **Set up custom domains** (optional)
3. **Configure monitoring** (optional)
4. **Set up staging environment** (optional)

Your deployment will be fully automated! 🎉
