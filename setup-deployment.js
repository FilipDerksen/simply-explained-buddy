#!/usr/bin/env node

console.log('🚀 Simply Explained Buddy - Deployment Setup Helper\n');

console.log('📋 Step-by-Step Setup:');
console.log('');

console.log('1️⃣  FRONTEND (Vercel):');
console.log('   • Go to: https://vercel.com');
console.log('   • Sign up with GitHub');
console.log('   • Import your repository');
console.log('   • Get token: https://vercel.com/account/tokens');
console.log('   • Get Project ID from project settings');
console.log('');

console.log('2️⃣  BACKEND (Railway):');
console.log('   • Go to: https://railway.app');
console.log('   • Sign up with GitHub');
console.log('   • Create new project');
console.log('   • Connect your repository');
console.log('   • Set root directory to "backend"');
console.log('   • Get token: https://railway.app/account/tokens');
console.log('   • Get Service ID from project settings');
console.log('');

console.log('3️⃣  GITHUB SECRETS:');
console.log('   • Go to: Repository → Settings → Secrets');
console.log('   • Add these secrets:');
console.log('     - VERCEL_TOKEN');
console.log('     - VERCEL_ORG_ID');
console.log('     - VERCEL_PROJECT_ID');
console.log('     - RAILWAY_TOKEN');
console.log('     - RAILWAY_SERVICE_ID');
console.log('');

console.log('4️⃣  ENVIRONMENT VARIABLES:');
console.log('   • In Railway: Add OPENAI_API_KEY');
console.log('   • In Railway: Add FRONTEND_URL (after Vercel deploy)');
console.log('');

console.log('5️⃣  TEST DEPLOYMENT:');
console.log('   • Push to main branch');
console.log('   • Check GitHub Actions');
console.log('   • Verify both deployments succeed');
console.log('');

console.log('📖 For detailed instructions, see: DEPLOYMENT-SETUP.md');
console.log('');
console.log('🎯 Once set up, your app will auto-deploy on every push!');
