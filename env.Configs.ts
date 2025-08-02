import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

// Validate required environment variables for Supabase
const requiredEnvVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY'
]

// Supabase service role key (for server-side operations)
const serverEnvVars = [
  'SUPABASE_SERVICE_ROLE_KEY'
]

// Check for missing environment variables in development
if (process.env.NODE_ENV === 'development') {
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName])
  
  if (missingVars.length > 0) {
    console.warn('⚠️ Missing Supabase environment variables:', missingVars)
    console.warn('Please check your .env file')
  } else {
    console.log('✅ All Supabase environment variables are loaded')
  }

  // Check Supabase service role key for SSR
  const missingServerVars = serverEnvVars.filter(varName => !process.env[varName])
  if (missingServerVars.length > 0) {
    console.warn('⚠️ Missing Supabase service role key for SSR:', missingServerVars)
    console.warn('Server-side features may not work properly')
  } else {
    console.log('✅ All Supabase server variables are loaded for SSR')
  }
}