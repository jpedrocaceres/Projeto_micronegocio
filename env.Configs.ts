import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

// Validate required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
  'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
  'NEXT_PUBLIC_FIREBASE_APP_ID'
]

// Firebase Admin variables (optional for client-side)
const adminEnvVars = [
  'FIREBASE_CLIENT_EMAIL',
  'FIREBASE_PRIVATE_KEY'
]

// Check for missing environment variables in development
if (process.env.NODE_ENV === 'development') {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName])
  
  if (missingVars.length > 0) {
    console.warn('⚠️ Missing Firebase environment variables:', missingVars)
    console.warn('Please check your .env file')
  } else {
    console.log('✅ All Firebase environment variables are loaded')
  }

  // Check Firebase Admin variables for SSR
  const missingAdminVars = adminEnvVars.filter(varName => !process.env[varName])
  if (missingAdminVars.length > 0) {
    console.warn('⚠️ Missing Firebase Admin variables for SSR:', missingAdminVars)
    console.warn('SSR features may not work properly')
  } else {
    console.log('✅ All Firebase Admin variables are loaded for SSR')
  }
}